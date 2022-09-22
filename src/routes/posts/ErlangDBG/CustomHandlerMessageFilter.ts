export const CustomHandlerMessageFilter =
    'Now we can customize our processing function.\n' +
    'Let it print the first 2 messages that state number is multiplication of 5:\n' +
    'For clarity lets define trace record in our shell\n' +
    '```erlang\n' +
    ' > rd(trace, {pid, type, mfa}).\n' +
    '```\n' +
    '\n' +
    '```erlang\n' +
    ' Fun25 = fun\n' +
    '  (X, 2) ->\n' +
    '  dbg:stop();\n' +
    '  (#trace{type=call,mfa={_,_,[keep_heavy_state, X]}}, Acc)\n' +
    '  when 0==(X rem 5) ->\n' +
    '  io:format("Value X:~p Value Acc: ~p~n", [X,Acc]),\n' +
    '  Acc+1;\n' +
    ' (_, Acc) -> Acc\n' +
    ' end.\n' +
    ' #Fun<erl_eval.12.128620087> \n' +
    '```\n' +
    '\n' +
    '```erlang\n' +
    ' > dbg:tracer(process,{Fun25,0}),\n' +
    ' > dbg:p(all,[c]),\n' +
    ' > dbg:tpl({tracing_experiments, traced_function, 2},[{\'_\', [], []}]).\n' +
    '```\n' +
    '\n' +
    '```erlang\n' +
    'tracing_experiments:switch_state().\n' +
    '...\n' +
    'tracing_experiments:switch_state().\n' +
    '```\n' +
    'Now we know how to add pattern matching to our not-blocking-shell solution.\n';
