---
layout: erldbg
---
Now we can customize our processing function.
Let it print the first 2 messages that state number is multiplication of 5:
For clarity lets define trace record in our shell
```erlang
 > rd(trace, {pid, type, mfa}).
```

```erlang
 Fun25 = fun
  (X, 2) ->
  dbg:stop();
  (#trace{type=call,mfa={_,_,[keep_heavy_state, X]}}, Acc)
  when 0==(X rem 5) ->
  io:format("Value X:~p Value Acc: ~p~n", [X,Acc]),
  Acc+1;
 (_, Acc) -> Acc
 end.
 #Fun<erl_eval.12.128620087> 
```

```erlang
 > dbg:tracer(process,{Fun25,0}),
 > dbg:p(all,[c]),
 > dbg:tpl({tracing_experiments, traced_function, 2},[{\'_\', [], []}]).
```

```erlang
tracing_experiments:switch_state().
...
tracing_experiments:switch_state().
```
Now we know how to add pattern matching to our not-blocking-shell solution.
