---
layout: erldbg
---
Let us retrieve timestamps of entering and leaving the function.
To get them to need to add another two flags in <bold>dbg:p/2</bold>, the <bold>strict_monotonic_timestamp</bold>, and <bold>return_to</bold>.

```erlang
 > dbg:p(all,[call, strict_monotonic_timestamp, return_to]),
 > dbg:tpl({tracing_experiments, traced_function, 2},
    [{\'$1\', [], [{display, \'$1\'}, {return_trace}]}]).
```

```erlang
 > tracing_experiments:switch_state().
 tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 91
 (<0.134.0>) call tracing_experiments:traced_function(enter_heavy_state,91)
    ({tracing_experiments, light_state, 3})
 (Timestamp: {-576091093700236178, -576460752303423401})

 (<0.134.0>) returning to tracing_experiments:light_state/3 
    (Timestamp: {-576091093699220788, -576460752303423400})
 ok
```

```erlang
 > tracing_experiments:switch_state().
 ok
```

```erlang
 TimeDiff = 576091093700236178-576091093699220788.
 1015390
 erlang:convert_time_unit(TimeDiff, native, millisecond).
 1
```
So, we spent one millisecond in <bold>traced_function/2</bold>.
