---
layout: erldbg
--- 

Another information we could want to retrieve is the function that triggered our traced function.
```erlang
 > dbg:tpl({tracing_experiments, traced_function, 2},
    [{\'_\', [], [ {message,{caller}}]}]).
 {ok,[{matched,nonode@nohost,1},{saved,4}]} 
```

```erlang
 > tracing_experiments:switch_state().
 tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 13 
 (<0.134.0>) call tracing_experiments:traced_function(enter_heavy_state,13)  
   ({tracing_experiments, light_state, 3})
 ok
```

```erlang
 > tracing_experiments:switch_state().
```
