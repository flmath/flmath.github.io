<script>
// import D3Cloud from './D3Cloud.svelte';
import { onMount } from "svelte";
    /**
* @type {typeof import("./D3Cloud.svelte").default}
*/
    let D3Cloud;
    let loaded = false;
    const text = [
      "Hello", "world", "normally", "you", "want", "more", "words",
      "than", "this"];
  onMount(async () => {
    setTimeout(async () => {
		D3Cloud = (await import('./D3Cloud.svelte')).default;
    loaded = true;}, 1000);
	});

$: innerWidth = 0
</script>
<svelte:window bind:innerWidth/>

<div class="d3">  
{#if loaded}  
<svelte:component this={D3Cloud} height={200} width={innerWidth/2} texts={text}/>
{:else}
<div class="d3" />
{/if}
</div>


  

<div>
  <p>
    I always was interested in automating tasAfter I graduade in mathematics I
    wanted to find job The most of my I have been working as an Erlang
    programmer in telecommunication. The technical stack is based on Linux, the
    above mentioned Erlang, Git/Gerrit as the project version control system,
    and Jenkins for CI/CD. Throughout my career, I was working in Agile teams
    (usually in SCRUM methodology) tasked with the end-to-end process of
    delivering requested feature. I was usually responsible for: analyzing
    requirements, evaluating feasibility and designing solutions, implementing
    solutions, writing function tests.
  </p>
  <p>
    Outside of feature work I also implement tools for development environments
    I work in. For example, I have written in Python a tool to parse HTML test
    logs into an SQLite database (to enable more advanced analysis'). Python is
    my favorite scripting language, I usually use Anaconda to have access to
    libraries like Numpy, Pandas, and Jupyter. Participation in various projects
    and courses taught me a lot of different languages (and frameworks). Among
    ones I have used recently are React, Matlab/Octave, R, and SQL(SQLite). I
    have two GitHub accounts where I'm keeping my public projects. The main
    repository contains accomplished projects and active ones like this blog.
    The "dirty" repository contains less clean code and projects queued for
    cleaning. For example, web graphics application for Erlang Common Test is in
    the "dirty" repository because it uses an outdated front end framework
    (AngularJs) and a back end framework (Cowboy) with broken dependency.
  </p>
  <p>
    The first programming language I have learned was C++, I have been some time
    since I have used it, but it does not mean I have anything against it.
  </p>
  <hr />

  <div class="table-main">
    <div class="grid-output">
      <div>Professional product development:</div>
      <div>Erlang, IMS, Linux, SCRUM, Git/Gerrit</div>

      <div>Scripting for professional purpose:</div>
      <div>Python, Sqlite, Javascript, R language</div>
    </div>
  </div>
</div>

<style>
  .d3 {
    height: 200px;
    display: flex;
    margin: 0;
    justify-content: center;
    padding: 0;
  }
  .grid-output {
    display: grid;
    grid-template-columns: repeat(2, 20rem);
    grid-template-rows: repeat(2, 3rem);
    grid-gap: 0.5rem;
  }

  .table-main {
    margin-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
