<script lang="ts">
  import Interests from "./Interests.svelte";
  import Certificates from "./Certificates.svelte";
  import Education from "./Education.svelte";
  import Experience from "./Experience.svelte";
  import Skills from "./Skills.svelte";
  import PersonalInfo from "./PersonalInfo.svelte";
  import CvHeader from "./CvHeader.svelte";
</script>
<div class="cv">
  <section id="PersonalInfo">
    <CvHeader>Personal Info</CvHeader>
    <PersonalInfo />
  </section>
  <section id="Skills">
    <CvHeader>Skills</CvHeader>
    <Skills />
  </section>
  <section id="Experience">
    <CvHeader>Experience</CvHeader>
    <Experience />
  </section>

  <section id="Education">
    <CvHeader>Education</CvHeader>
    <Education />
  </section>

  <section id="Certificates">
    <CvHeader>Certificates</CvHeader>
    <Certificates />
  </section>
  <section id="Interests">
    <CvHeader>Interests</CvHeader>
    <Interests />
  </section>
</div>

<style>
   .cv {
    position: relative;
    margin: 0;
    /* -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px); */
  
    overflow-x: clip;
  }
</style>