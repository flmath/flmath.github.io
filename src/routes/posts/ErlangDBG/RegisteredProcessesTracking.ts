export const RegisteredProcessesTracking =
    'If the system consists of many OTP processes that are handled \n' +
    'with special messages and the process we are interested in \n' +
    'is registered it is worth to narrow our search by tracing specific process.\n' +

    '```erlang\n' +
    ' > dbg:tracer(process,{Fun,[]}),\n' +
    ' > Pid = global:whereis_name(tracing_experiments).\n' +
    ' <0.134.0>\n' +
    '```\n' +
    '\n' +
    '```erlang\n' +
    ' > dbg:p(global:whereis_name(tracing_experiments), [c,p]).\n' +
    ' {ok,[{matched,nonode@nohost,1}]}\n' +
    '```\n';

