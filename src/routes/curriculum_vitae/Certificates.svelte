<script lang="ts">
  import IntroToLogic from "$lib/assets/certs/introtologic.pdf";
  import MachineLearning from "$lib/assets/certs/machinelearning.pdf";
  import ComputerNet from "$lib/assets/certs/comnet.pdf";
  import UStats from "$lib/assets/certs/ustats.pdf";
  import Erlang from "$lib/assets/certs/erlang.pdf";
</script>

<div class="glass table-main">
  <div class="grid-output">
    <div class="colone">2018:</div>
    <div>
      <a target="_blank" rel="noopener noreferrer" href={IntroToLogic}>
        Coursera online certificate: Introduction to Logic
      </a>
    </div>

    <div class="colone">2017:</div>
    <div>
      <a target="_blank" rel="noopener noreferrer" href={MachineLearning}>
        Coursera online certificate: Machine Learning
      </a>
    </div>

    <div class="colone">2014:</div>

    <div>
      <a target="_blank" rel="noopener noreferrer" href={MachineLearning}>
        Coursera online certificate: Model Thinking
      </a>
    </div>

    <div class="colone">2013:</div>
    <div>
      <a target="_blank" rel="noopener noreferrer" href={ComputerNet}>
        Coursera online certificate: Computer Networks
      </a>
    </div>

    <div class="colone">2013:</div>
    <div>
      <a target="_blank" rel="noopener noreferrer" href={UStats}>
        Udacity online certificate: Statistic
      </a>
    </div>

    <div class="colone">2012:</div>
    <div>
      <a target="_blank" rel="noopener noreferrer" href={Erlang}>
        Erlang Solution: Foundation Certificate
      </a>
    </div>
  </div>
</div>

<style>
  .grid-output {
    display: grid;
    grid-template-columns: repeat(2, 20rem);
    grid-template-rows: repeat(2, 3rem);
    grid-gap: 0.5rem;
  }
  div {
    margin-left: 5%;
    margin-right: 5%;

    visibility: visible;
  }

  .table-main {
    padding: 1rem;
    font-size: var(--the-font-size);
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    .grid-output {
      display: grid;
      grid-template-columns: repeat(1, 80%);
      grid-template-rows: repeat(1, 2rem);
      grid-gap: 0.1rem;
    }
    /* 
    .colone {
       visibility: hidden; 
    } */
  }

  @media only screen and (min-width: 600px) {
    .grid-output {
      display: grid;
      grid-template-columns: repeat(2, 20rem);
      grid-template-rows: repeat(2, 3rem);
      grid-gap: 0.5rem;
    }
  }
</style>
