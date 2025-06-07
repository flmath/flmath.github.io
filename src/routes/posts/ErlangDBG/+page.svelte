<script lang="ts">
    import Introduction from './Introduction.md?svelte';
	import CustomHandler from './CustomHandler.md?svelte';
	import Timestamps from './Timestamps.md?svelte';
	import TraceFunction from './TraceFunction.md?svelte';
	import FindCaller from './FindCaller.md?svelte';
	import Setup from './Setup.md?svelte';
	import CustomHandlerMessageFilter from './CustomHandlerMessageFilter.md?svelte';
	import CustomHandlerMessageSignals from './CustomHandlerSignals.md?svelte';
	import RegisteredProcessesTracking from './RegisteredProcessesTracking.md?svelte';
	import Cleanup from './Cleanup.md?svelte';
	import HeaderShort from '../HeaderShort.svelte';
	import Header from '../Header.svelte';
	import BasicScenario from './BasicScenario.md?svelte';
	import Conclusion from './Conclusion.md?svelte';
</script>

<div class="container">
	<section id="Introduction">
		<Header>Introduction</Header>

		<div class="glass">
            <Introduction></Introduction>
		</div>
	</section>

	<section id="Setup">
		<Header>Setup</Header>

		<div class="glass">
			<Setup></Setup>
		</div>
	</section>
	<section id="Basic Scenario">
		<Header>Basic Scenario</Header>

		<div class="glass">
			<BasicScenario></BasicScenario>
		</div>
	</section>
	<section id="Trace Function">
		<Header>Trace Function</Header>
		<div class="glass"><TraceFunction> </TraceFunction></div>
	</section>


	<section id="Function Caller Finding">
		<Header>Function Caller Finding</Header>
		<div class="glass"><FindCaller></FindCaller></div>
	</section>


	<section id="Timestamps">
		<Header>Timestamps</Header>
		<div class="glass"><Timestamps></Timestamps></div>
	</section>


	<section id="CustomHandler">
		<Header>Custom Handler</Header>
		<div class="glass">
			<CustomHandler></CustomHandler>
		</div>
	</section>


	<section id="Custom Handler: Introduction">
		<HeaderShort>Introduction</HeaderShort>
		<div class="glass"><CustomHandler></CustomHandler></div>
	</section>

	<section id="CustomHandlerMessageFilter">
		<HeaderShort>Message Filter</HeaderShort>
		<div class="glass">
			<CustomHandlerMessageFilter></CustomHandlerMessageFilter>
		</div>
	</section>


	<section id="Custom Handler: Signals">
		<HeaderShort>Signals</HeaderShort>
		<div class="glass">
			<CustomHandlerMessageSignals></CustomHandlerMessageSignals>
		</div>
	</section>


	<section id="Registered Process Tracking">
		<Header>Registered Process Tracking</Header>
		<div class="glass">
			<RegisteredProcessesTracking></RegisteredProcessesTracking>
		</div>
	</section>

	<section id="Cleanup">
		<Header>Cleanup</Header>
		<div class="glass"><Cleanup></Cleanup></div>
	</section>


	<section id="Conclusion">
		<Header>Conclusion</Header>
		<div class="glass"><Conclusion></Conclusion></div>
	</section> 
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
