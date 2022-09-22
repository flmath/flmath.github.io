export const FindCaller =
    'Another information we could want to retrieve is the function that triggered our traced function.\n' +
    '```erlang\n' +
    ' > dbg:tpl({tracing_experiments, traced_function, 2},\n' +
    '    [{\'_\', [], [ {message,{caller}}]}]).\n' +
    ' {ok,[{matched,nonode@nohost,1},{saved,4}]} \n' +
    '```\n' +
    '\n' +
    '```erlang\n' +
    ' > tracing_experiments:switch_state().\n' +
    ' tracing_experiments.erl:86:<0.134.0>: io:format called from state enter_heavy_state number 13 \n' +
    ' (<0.134.0>) call tracing_experiments:traced_function(enter_heavy_state,13)  \n' +
    '   ({tracing_experiments, light_state, 3})\n' +
    ' ok\n' +
    '```\n' +
    '\n' +
    '```erlang\n' +
    ' > tracing_experiments:switch_state().\n' +
    '```\n';
