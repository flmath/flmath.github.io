---
layout: erldbg
---
The problem with all of the commands above is, 
that all the messages are printed out to the shell. What 
in case of tracing very active function ends up blocking the shell by spamming it with a continuous unreadable amount of printouts.

The classic example provided on https://massemanet.github.io/eper/redbug
is: 
(Caution: it will hang the shell, run it in separate only to see how it looks like).
```erlang
 > dbg:tracer(),dbg:p(all,[m]).
 {ok,[{matched,nonode@nohost,71}]}
```
To deal with that we need to customize the way we are reading our messages. 
Instead of the <bold>dbg:trace/0</bold> we use the <bold>dbg:trace/2</bold> which takes as first argument an atom. Possible values are:
port - the trace messages are sent to port
process - we handle trace messages with custom function
module - we implement trace module

Since we consider here scenario with limited options 
(otherwise it is just better to install one of the mentioned frameworks), we will use the process case. 
In that scenario, the second argument of the <bold>dbg:trace/2</bold> has a form of a tuple: <bold>`{`Fun, InitData`}`</bold>. 
The Fun is a function that takes two arguments.
The first is the received message and the second is the accumulator returned from the previous iteration.
The <bold>InitData</bold> is a starting value of the accumulator. 
In other words, it works like <bold>lists:foldl/3</bold> with the difference that instead input list we process received trace messages.

Let us start with a Fun that will assure that dbg will stop after receiving exactly one message, 
eliminating the possibility that we hang the shell by flooding it with a continuous stream of messages.

```erlang
 > Fun = fun(X, Acc) ->
 > io:format("Value X:~p Value Acc: ~p~n", [X, Acc]), 
 > dbg:stop(),
 > [X|Acc]
 > end.
 #Fun<erl_eval.12.128620087> 
```

```erlang
 > dbg:ctp('_').
 {ok,[]} 
```

```erlang
 > dbg:tracer(process,{Fun,[]}),
 > dbg:p(all,[c]),
 > dbg:tpl({tracing_experiments, traced_function, 2},[{'_', [], []}]).
 {ok,[{matched,nonode@nohost,1},{saved,1}]} 
```

```erlang
 > tracing_experiments:switch_state().
 tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 56
 Value X:{trace,<0.134.0>,call,
 {tracing_experiments,traced_function,[enter_heavy_state,56]}} Value Acc: [] 
 ok 

 > tracing_experiments.erl:86:<0.134.0>: io:format called from state keep_heavy_state number 57 

 > tracing_experiments.erl:86:<0.134.0>: io:format called from state keep_heavy_state number 58 
 ...
```

```erlang
 > tracing_experiments:switch_state().
 ok 
```
From hard-coded debug messages, you can see that <bold>traced_function/2</bold> is called continuously, 
but only the traces for state 56 are printed out. So we have a working safe switch.
Lets see what will happened if we go for classical example:
```erlang
 > dbg:tracer(process,{Fun,[]}). {ok,<0.655.0>}
 > dbg:p(all,[m]). 
 ... long but finite output ...
```
The shell is operational.
