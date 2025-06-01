---
layout: erldbg
---
Let us purge the tracing from the system.
First, clean up the process flags.
```erlang
 > dbg:p(all,clear).
```
Remove function tracing.
```erlang
 > dbg:ctp(\'_\').
```
Shutdown the debug tracer.
```erlang
 > dbg:stop().
```

