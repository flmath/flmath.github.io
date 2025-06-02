<script lang="ts">
    import Introduction from './Introduction.md';
	import CustomHandler from './CustomHandler.md';
	import Timestamps from './Timestamps.md';
	import TraceFunction from './TraceFunction.md';
	import FindCaller from './FindCaller.md';
	import Setup from './Setup.md';
	import CustomHandlerMessageFilter from './CustomHandlerMessageFilter.md';
	import CustomHandlerMessageSignals from './CustomHandlerSignals.md';
	import RegisteredProcessesTracking from './RegisteredProcessesTracking.md';
	import Cleanup from './Cleanup.md';
	import HeaderShort from './HeaderShort.svelte';
	import Header from './Header.svelte';
	import BasicScenario from './BasicScenario.md';
	import Conclusion from './Conclusion.md';
</script>

<div class="container">
	<section id="Introduction">
		<Header>Introduction</Header>

		<div class="glass">
            <Introduction />            
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
		<div class="glass"><FindCaller /></div>
	</section>


	<section id="Timestamps">
		<Header>Timestamps</Header>
		<div class="glass"><Timestamps /></div>
	</section>


	<section id="CustomHandler">
		<Header>Custom Handler</Header>
		<div class="glass">
			<CustomHandler />
		</div>
	</section>


	<section id="Custom Handler: Introduction">
		<HeaderShort>Introduction</HeaderShort>
		<div class="glass"><CustomHandler /></div>
	</section>

	<section id="CustomHandlerMessageFilter">
		<HeaderShort>Message Filter</HeaderShort>
		<div class="glass">
			<CustomHandlerMessageFilter />
		</div>
	</section>


	<section id="Custom Handler: Signals">
		<HeaderShort>Signals</HeaderShort>
		<div class="glass">
			<CustomHandlerMessageSignals />
		</div>
	</section>


	<section id="Registered Process Tracking">
		<Header>Registered Process Tracking</Header>
		<div class="glass">
			<RegisteredProcessesTracking />
		</div>
	</section>

	<section id="Cleanup">
		<Header>Cleanup</Header>
		<div class="glass"><Cleanup /></div>
	</section>

 
	<section id="Conclusion">
		<Header>Conclusion</Header>
		<div class="glass"><Conclusion /></div>
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
