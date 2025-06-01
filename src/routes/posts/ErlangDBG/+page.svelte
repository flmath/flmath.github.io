<script lang="ts">
    import { CustomHandler } from "./CustomHandler";
    import { Timestamps } from "./Timestamps";
    import { TraceFunction } from "./TraceFunction";
    import { BasicScenario } from "./BasicScenario";
    import { FindCaller } from "./FindCaller";
    import { Setup } from "./Setup";
    import { CustomHandlerMessageFilter } from "./CustomHandlerMessageFilter";
    import { CustomHandlerMessageSignals } from "./CustomHandlerSignals";
    import { RegisteredProcessesTracking } from "./RegisteredProcessesTracking";
    import { Cleanup } from "./Cleanup";
    import HeaderShort from "./HeaderShort.svelte";
    import Header from "./Header.svelte";
    import BS from "./BasicScenario.md";
    import { Conclusion } from "./Conclusion";
 
</script>

<div class="container">
    <section id="Introduction">
        <Header>Introduction</Header>

        <div class="glass">
            An important aspect of the Erlang/OTP platforms maturity is the
            presence of native debug library. Unfortunately, the dbg module is
            not only steep to learn but also can be very harmful if misused (see <a
                href="#CustomHandler">Custom Handler: Introduction</a
            >). In this post, I show how to use the tool, avoid pitfalls and
            extract the needed information. The article is composed of scenarios
            starting with the most basic and then expanding it with the usage of
            the module different caveats. Each scenario uses very simple
            gen_statem as target practice, the setup of it is in the following
            chapter.
        </div>
    </section>

    <section id="Setup">
        <Header>Setup</Header>
        
          <div class="glass">
            <BS></BS>
        </div>

    </section>
    <!-- <section id="Basic Scenario">
        <Header>Basic Scenario</Header>

        <div class="glass"><SvelteMarkdown source={BasicScenario} /></div>
    </section>

    <section id="Trace Function">
        <Header>Trace Function</Header>
        <div class="glass"><SvelteMarkdown source={TraceFunction} /></div>
    </section>

    <section id="Function Caller Finding">
        <Header>Function Caller Finding</Header>
        <div class="glass"><SvelteMarkdown source={FindCaller} /></div>
    </section>
    <section id="Timestamps">
        <Header>Timestamps</Header>
        <div class="glass"><SvelteMarkdown source={Timestamps} /></div>
    </section>

    <div class="glass"></div>

    <section id="CustomHandler"></section>
    <Header>Custom Handler</Header>

    <section id="Custom Handler: Introduction">
        <HeaderShort>Introduction</HeaderShort>
        <div class="glass"><SvelteMarkdown source={CustomHandler} /></div>
    </section>
    <section id="CustomHandlerMessageFilter">
        <HeaderShort>Message Filter</HeaderShort>
        <div class="glass">
            <SvelteMarkdown source={CustomHandlerMessageFilter} />
        </div>
    </section>
    <section id="Custom Handler: Signals">
        <HeaderShort>Signals</HeaderShort>
        <div class="glass">
            <SvelteMarkdown source={CustomHandlerMessageSignals} />
        </div>
    </section>
    <section id="Registered Process Tracking">
        <Header>Registered Process Tracking</Header>
        <div class="glass">
            <SvelteMarkdown source={RegisteredProcessesTracking} />
        </div>
    </section>
    <section id="Cleanup">
        <Header>Cleanup</Header>
        <div class="glass"><SvelteMarkdown source={Cleanup} /></div>
    </section>

    <section id="Conclusion">
        <Header>Conclusion</Header>
        <div class="glass"><SvelteMarkdown source={Conclusion} /></div>
    </section> -->
</div>

<style>
    .container {
        position: relative;
        margin: 0;
        /* -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px); */

        overflow-x: clip;
    }

    div {
        margin-left: 15%;
        margin-right: 15%;
        padding: 1rem;
        visibility: visible;
    }
</style>
