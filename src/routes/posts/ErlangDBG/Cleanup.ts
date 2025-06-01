export const Cleanup =
'Let us purge the tracing from the system.\n'+
'First, clean up the process flags.\n'+
'```erlang\n'+
' > dbg:p(all,clear).\n'+
'```\n'+
'Remove function tracing.\n'+
'```erlang\n'+
' > dbg:ctp(\'_\').\n'+
'```\n'+
'Shutdown the debug tracer.\n'+
'```erlang\n'+
' > dbg:stop().\n'+
'```\n';

