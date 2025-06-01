---
layout: erldbg
---
First, try to check other sources of information, in most cases, the erlang dump file should be enough.

If it is possible to install some debug/test framework instead, for example:
- https://massemanet.github.io/eper/redbug\n
- https://ferd.github.io/recon/\n

If you are a consultant check your insurance.

Since the <bold>return_trace</bold> (and <bold>exception_trace</bold>) flag is potentially behavior-changing we'd better avoid it.

I have omitted <bold>seq_trace</bold> utilities, on purpose, I do not feel well when a single press of the tab key can hang your shell.

But if you are comfortable with sequence tracing on production nodes, then why have you read through this document in the first place?

If you still see need to use dbg on live node start from writing 
a processing function that has message counter as an accumulator and 
safeguards to <bold>dbg:stop/0</bold> after a specific number of printed messages.

It is good when the number of messages is safeguarded in the first header of the defined function (see [<bold>Fun25</bold>](#CustomHandlerMessageFilter)).

Alternatively just run <bold>dbg:stop/0</bold> after the first match if you don\'t need to catch more than one message.

You can mail me: flmathematic at gmail.com.

