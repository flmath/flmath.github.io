<script lang="ts">
	

  import TimeLineCv from "./TimeLineCv.svelte";
  import CvHeaderShort from "./CvHeaderShort.svelte";
</script>
<TimeLineCv />

<div class="left">
<CvHeaderShort>08/2015 to 03/2022 Telia ACE</CvHeaderShort>
<p>Developing Telias ACE platform for contact centers. Converting OTP FSMs into Statem. Extending products REST API.
</p>

  <p>Technologies: Erlang, OpenAPI </p>
</div>
  <div class="right">
  <CvHeaderShort> 08/2015 to 03/2022 Ericsson SBG, consultant from DEK 	</CvHeaderShort>
  <p>Developing IMS Session Border Gateway (SBG). Extending various capabilities of the SBG project. Extending SIP, Diameter and Megaco protocol implementations. improving charging, performance measurments and control.
  </p>

    <p>	Technologies: Erlang, Docker (using not developing), PTA language, Seagull, Python  </p>
        
    <p>
	Improvements: Created tool for parsing test logs to a sqlite database. </p>
  
	<p>Other: DEK Machine Learning group participant.</p>
</div>
  <div class="right">
  <CvHeaderShort>  01/2014 to 06/2015 Ericsson SBG, consultant from Ericpol</CvHeaderShort>
  <p>Expanded a TLS support. Extended SIP Trunking feature. Created simulations of the SBG node (in R language) to compare throttling algorithms.

    <p>Technologies: Erlang, R language</p>


	<p>Improvements: Support scripts for PTA language.</p>
</div>
  <div class="left">
  <CvHeaderShort>05/2012 to 12/2013 Ericsson MTAS, consultant from Ericpol</CvHeaderShort>
  <p>Developing MTAS (Multimedia Telephony Application Server). Extending communication with HLR.

    <p>Technologies: C++, TTCN-3</p>
  </div>
    <div>
  <CvHeaderShort>02/2012 to 07/2015 Ericpol</CvHeaderShort>
  <p>A supplier for MTAS and SBG projects. Passed exams from Erlang, TTCN-3, and C++ languages.</p>
</div>
  <style>
   
  p {
    text-align: justify;    
    margin-left: 2rem;
    margin-right: 1rem;
  }
  

  div {
    margin-left: 5%;
    margin-right: 10%;   

    visibility:visible;
    background-color: rgba(255,255,255,0.8);

    }

  .table-main {
    font-size: var(--the-font-size);
  
    margin-left: 0;
    display: flex;
    justify-content: center;
  }
</style>