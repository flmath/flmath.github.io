---
layout: erldbg
---

If the system consists of many OTP processes that are handled 
with special messages and the process we are interested in 
is registered it is worth to narrow our search by tracing specific process.

```erlang
 > dbg:tracer(process,{Fun,[]}),
 > Pid = global:whereis_name(tracing_experiments).
 <0.134.0>
```

```erlang
 > dbg:p(global:whereis_name(tracing_experiments), [c,p]).
 {ok,[{matched,nonode@nohost,1}]}
```

