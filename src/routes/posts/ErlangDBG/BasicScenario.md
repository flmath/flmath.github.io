---
layout: erldbg
---
Let us start with a basic scenario. I will omit some of the messages printed out by the shell for clarity. 
```erlang
 > dbg:tracer().  
 {ok, <0.218.0>}
 ``` 
```erlang 
 > dbg:p(all,[c]).
 {ok,[{matched,nonode@nohost,71}]}
```
```erlang
 > dbg:tp(tracing_experiments, []).
 (<0.117.0>) call tracing_experiments:module_info()
 {ok,[{matched,nonode@nohost,13}]}
```
Now lets switch traced process to more busy state:
```erlang
 > tracing_experiments:switch_state().
```
We get messages in a loop:
```erlang
 tracing_experiments.erl:86:<0.134.0>: io:format called from state keep_heavy_state number 8
 (<0.134.0>) call tracing_experiments:heavy_state(timeout,1000,#{iterator =&gt; 8})
 ...
```
Lets switch back:
```erlang
 > tracing_experiments:switch_state().
 ok
```

The first message comes from debug function we have put into the code.
The second is actually printed out by our <bold>dbg:tracer/0</bold>
But if you look into the code, there is another <bold>traced_function/2</bold> that is present in the
tracing_experiments module that is not printed out. It is because <bold>dbg:tp/2</bold> prints only the exported functions.
For local functions we need also to run:
```erlang
 > dbg:tpl(tracing_experiments, []).
 (<0.117.0>) call tracing_experiments:module_info()
 {ok,[{matched,nonode@nohost,14}]}
```
Let us see how it works:
```erlang
 > tracing_experiments:switch_state().
 (<0.117.0>) call tracing_experiments:switch_state()
 tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 26
 (<0.134.0>) call tracing_experiments:light_state(cast,switch_state,#{iterator => 26})
 (<0.134.0>) call tracing_experiments:traced_function(enter_heavy_state,26)
 ok
```
```erlang
 > tracing_experiments:switch_state()
 ok 
```

So we can see additional printout for <bold>traced_function/2</bold>.
Which concludes the most basic scenario.
Let clean our tracing setup.
```erlang
 > dbg:ctp(\'_\').
 ok
```
Lets double check it.
```erlang
 > tracing_experiments:switch_state().
 tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_light_state number 39
```
```erlang
 > tracing_experiments:switch_state().
 ok
```
The call tracing is set off.

