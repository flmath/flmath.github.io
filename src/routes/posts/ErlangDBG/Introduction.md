---
layout: erldbg
---
An important aspect of the Erlang/OTP platforms maturity is the presence of native debug
library. Unfortunately, the dbg module is not only steep to learn but also can be very harmful if misused (see [Custom Handler: Introduction](#CustomHandler)). 

In this post, I show how to use the tool, avoid pitfalls and extract the needed information. The article is	composed of scenarios starting with the most basic and then expanding it with the usage of the module different caveats. Each scenario uses very simple gen_statem as target practice, the setup of it is in the following chapter.