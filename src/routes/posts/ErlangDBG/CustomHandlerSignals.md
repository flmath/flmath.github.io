---
layout: erldbg
---
One thing extra we should learn is catching exit and error messages.
We can use the Fun function to see how those messages look like:
```erlang
 FunExit = fun
  (#trace{type=exit,mfa=Reason}, MsgNo)->
  io:format("Value: ~p Value MsgNo: ~p~n", [{exit, Reason}, MsgNo]),
  dbg:stop();
 (_, MsgNo) -> MsgNo
 end.
```

```erlang
 > dbg:tracer(process,{FunExit,0}).
```
 Lets trace process events, aside of calls.

```erlang
 > dbg:p(all,[p,c]).
```

 And invoke termination with one of the below functions:
```erlang
 gen_statem:cast({global, tracing_experiments}, wrong_cast).
 exit(global:whereis_name(tracing_experiments), "something").
 exit(global:whereis_name(tracing_experiments), kill).
 exit(global:whereis_name(tracing_experiments), normal).
 ...
```
Of course, when we are dealing with local processes we should replace 
the <bold>global:whereis_name(ProcessName)</bold> with the <bold>whereis(ProcessName)</bold>.

