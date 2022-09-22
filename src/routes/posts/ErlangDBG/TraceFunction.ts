export const TraceFunction =
    'Tracing all functions in a module is sometimes too much for printout readability.\n' +
    'Fortunately, it is easy to narrow tracing to a specific function. Lets trace <bold>traced_function/2</bold>. First, let us use <bold>dbg:tp</bold>\n' +
    '```erlang\n' +
    ' > dbg:tp({tracing_experiments, traced_function, 2},[]),\n' +
    ' > tracing_experiments:switch_state().\n' +
    ' tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 49\n' +
    '```\n' +
    '\n' +
    '```erlang\n' +
    ' > tracing_experiments:switch_state().\n' +
    ' ok\n' +
    '```\n' +

    'Since <bold>traced_function/2</bold> is local we do not get any additional traces. Lets add local tracing.\n' +
    '```erlang\n' +
    ' > dbg:tpl({tracing_experiments, traced_function, 2},[]),\n' +
    ' > tracing_experiments:switch_state().\n' +
    ' tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_light_state number 108\n' +
    ' (<0.134.0>) call tracing_experiments:traced_function(enter_light_state,108)\n' +
    '```\n' +
    '\n' +
    '```erlang\n' +
    ' > tracing_experiments:switch_state().\n' +
    ' ok\n' +
    '```\n' +
    'It works fine, lets extract a little more information, \n' +
    'the second argument in <bold>dbg:tp/2</bold> can take a form of <bold>[{ MatchHead, MatchConditions, MatchBody }]</bold>.\n' +

    'MatchHead can be \'_\' for anonymous variables or we can match it to the variable \'$1\' to display it later.\n' +

    '```erlang\n' +
    ' > dbg:tpl({tracing_experiments, traced_function, 2},[{\'$1\', [], [{display, \'$1\'}]}]),\n' +
    ' > tracing_experiments:switch_state().\n' +
    ' [enter_light_state,228]\n' +
    ' tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_light_state number 228\n' +
    ' (<0.134.0>) call tracing_experiments:traced_function(enter_light_state,228)\n' +
    '```\n' +
    '\n' +
    '```erlang\n' +
    ' > tracing_experiments:switch_state().\n' +
    ' ok\n' +
    '```\n' +

    'So the function is called with parameters enter_light_state and 228.\n' +
    'Lets return in body two more pieces of information.\n' +
    'The first what values is returned from the function:\n' +

    '```erlang\n' +
    ' > dbg:tpl({tracing_experiments, traced_function, 2},[{\'_\', [], [ {return_trace}]}]),\n' +
    ' > tracing_experiments:switch_state().\n' +
    ' tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 5\n' +
    ' (<0.134.0>) call tracing_experiments:traced_function(enter_heavy_state,5)\n' +
    ' (<0.134.0>) returned from tracing_experiments:traced_function/2 -> ok\n' +
    ' ok\n' +
    '```\n' +
    '\n' +
    '```erlang\n' +
    ' > tracing_experiments:switch_state().\n' +
    ' ok\n' +
    '```\n' +
    'It returns an `ok` atom from debug printing function. \n' +
    'It is worth mentioning that according to documentation <bold>{return_trace}</bold> can\n' +
    'interfere with the system behavior.\n' +
    'If you want also the <bold>\'EXIT\'</bold> messages to be displayed you can replace <bold>{return_trace} </bold> with <bold>{exception_trace} </bold> instead.\n' +
    '\n' +
    'Reference: [Erlang documentation: functions allowed only for tracing.](http://erlang.org/doc/apps/erts/match_spec.html#functions-allowed-only-for-tracing)\n';

