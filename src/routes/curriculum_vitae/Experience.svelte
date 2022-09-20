<script lang="ts">
  import { Circle2 } from "svelte-loading-spinners";
  import CvHeaderShort from "./CvHeaderShort.svelte";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  let TimeLineCv: svelte.JSX.IntrinsicAttributes;
  let loaded = false;
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  onMount(async () => {
    await sleep(2000);

    setTimeout(async () => {
      TimeLineCv = (await import("./TimeLineCv.svelte")).default;
      loaded = true;
    }, 2000);
  });
</script>

{#if loaded}
  <div transition:fade>
    <svelte:component this={TimeLineCv} />
  </div>
{:else}
  <div class="contain-spiner">
    <div class="spiner">
      <Circle2
        size="60"
        colorOuter="rgba(0, 191, 255, 1)"
        colorCenter="rgba(255, 255, 0, 1)"
        colorInner="rgba(188, 33, 34, 1)"
        unit="px"
        duration="1s"
      />
    </div>
  </div>
{/if}

<div class="glass">
  <CvHeaderShort >04/2022 to Present: Telia ACE</CvHeaderShort>
  <p>
    Developing Telias ACE platform for contact centers. Converting OTP FSMs into
    Statem. Extending products REST API.
  </p>

  <p>Technologies: Erlang, OpenAPI</p>
</div>
<div class="glass">
  <CvHeaderShort>
    08/2015 to 03/2022: Ericsson SBG, consultant from DEK
  </CvHeaderShort>
  <p>
    Developing IMS Session Border Gateway (SBG). Extending various capabilities
    of the SBG project. Extending SIP, Diameter and Megaco protocol
    implementations. improving charging, performance measurments and control.
  </p>

  <p>
    Technologies: Erlang, Docker (using not developing), PTA language, Seagull,
    Python
  </p>

  <p>Improvements: Created tool for parsing test logs to a sqlite database.</p>

  <p>Other: DEK Machine Learning group participant.</p>
</div>
<div class="glass">
  <CvHeaderShort>
    01/2014 to 06/2015: Ericsson SBG, consultant from Ericpol</CvHeaderShort
  >
  <p>
    Expanded a TLS support. Extended SIP Trunking feature. Created simulations
    of the SBG node (in R language) to compare throttling algorithms.
  </p>
  <p>Technologies: Erlang, R language</p>

  <p>Improvements: Support scripts for PTA language.</p>
</div>
<div class="glass">
  <CvHeaderShort
    >05/2012 to 12/2013: Ericsson MTAS, consultant from Ericpol</CvHeaderShort
  >
  <p>
    Developing MTAS (Multimedia Telephony Application Server). Extending
    communication with HLR.
  </p>
  <p>Technologies: C++, TTCN-3</p>
</div>
<div class="glass">
  <CvHeaderShort>02/2012 to 07/2015: Ericpol</CvHeaderShort>
  <p>
    A supplier for MTAS and SBG projects. Passed exams from Erlang, TTCN-3, and
    C++ languages.
  </p>
</div>

<style>
  p {
    text-align: justify;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  div {
    margin-left: 2rem;
     

  }
  .contain-spiner {
    display: flex;
    height: calc(300px + calc(20px * 6)); /*250px + 20px * noOfRows */
    justify-content: center;
  }
  .spiner {
    align-self: center;
    scale: 2;
  }
</style>
