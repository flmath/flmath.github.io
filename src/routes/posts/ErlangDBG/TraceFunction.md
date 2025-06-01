---
layout: erldbg
---
Tracing all functions in a module is sometimes too much for printout readability.
Fortunately, it is easy to narrow tracing to a specific function. Lets trace <bold>traced_function/2</bold>. First, let us use <bold>dbg:tp</bold>
```erlang
 > dbg:tp({tracing_experiments, traced_function, 2},[]),
 > tracing_experiments:switch_state().
 tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 49
```

```erlang
 > tracing_experiments:switch_state().
 ok
```

Since <bold>traced_function/2</bold> is local we do not get any additional traces. Lets add local tracing.
```erlang
 > dbg:tpl({tracing_experiments, traced_function, 2},[]),
 > tracing_experiments:switch_state().
 tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_light_state number 108
 (<0.134.0>) call tracing_experiments:traced_function(enter_light_state,108)
```

```erlang
 > tracing_experiments:switch_state().
 ok
```
It works fine, lets extract a little more information, 
the second argument in <bold>dbg:tp/2</bold> can take a form of <bold>[{ MatchHead, MatchConditions, MatchBody }]</bold>.

MatchHead can be \'_\' for anonymous variables or we can match it to the variable \'$1\' to display it later.

```erlang
 > dbg:tpl({tracing_experiments, traced_function, 2},[{\'$1\', [], [{display, \'$1\'}]}]),
 > tracing_experiments:switch_state().
 [enter_light_state,228]
 tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_light_state number 228
 (<0.134.0>) call tracing_experiments:traced_function(enter_light_state,228)
```

```erlang
 > tracing_experiments:switch_state().
 ok
```

So the function is called with parameters enter_light_state and 228.
Lets return in body two more pieces of information.
The first what values is returned from the function:

```erlang
 > dbg:tpl({tracing_experiments, traced_function, 2},[{\'_\', [], [ {return_trace}]}]),
 > tracing_experiments:switch_state().
 tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 5
 (<0.134.0>) call tracing_experiments:traced_function(enter_heavy_state,5)
 (<0.134.0>) returned from tracing_experiments:traced_function/2 -> ok
 ok
```

```erlang
 > tracing_experiments:switch_state().
 ok
```
It returns an `ok` atom from debug printing function. 
It is worth mentioning that according to documentation <bold>{return_trace}</bold> can
interfere with the system behavior.
If you want also the <bold>\'EXIT\'</bold> messages to be displayed you can replace <bold>{return_trace} </bold> with <bold>{exception_trace} </bold> instead.

Reference: [Erlang documentation: functions allowed only for tracing.](http://erlang.org/doc/apps/erts/match_spec.html#functions-allowed-only-for-tracing)

