<script lang="ts">
import { fade } from 'svelte/transition';
import { onMount } from "svelte";
    /**
* @type {typeof import("./D3Cloud.svelte").default}
*/
    
    let wordcloud = 0;  
    let D3Cloud;
    let loaded = false;
    $: refresh = true; 
    const text = ["Erlang", "Linux", "Python", "Svelte", "React", "Numpy", "Javascript", "IMS", "Agile", "Git", "SIP", "R" ];
    function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    onMount(async () => {
      await sleep(4000); 
    setTimeout(async () => {
		D3Cloud = (await import('./D3Cloud.svelte')).default;
    }, 2000);
    
    loaded = true;
    while (loaded && (wordcloud===0))
    {
      await sleep(5000);
      refresh = false;
      await sleep(500);
      
      refresh = true;
     }
    });

$: innerWidth = 0
</script>
<svelte:window bind:innerWidth/>
  <!-- {refresh} {loaded} -->
  
  {#if wordcloud < 2 }
  <div><p> If you want to get rid of the wordcloud below, click once to set it on pause, the second click removes it.</p></div>
  <div class="d3" on:click={() => wordcloud+=1}>  
    {#if (loaded && refresh) || wordcloud===1}   
    <div class="d3" transition:fade>
    <svelte:component this={D3Cloud} height={200} width={innerWidth} texts={text}/>
  </div>
    {:else}
    <div class="d3" transition:fade />
    {/if}
    </div>
 {:else}
 <div transition:fade />
   {/if}

<div class="table-main">
  <div class="grid-output">
    <div>Profession related:</div>
    <div>Erlang, Telco, Linux, Agile, Git</div>

    <div>For personal projects:</div>
    <div>Python, Svelte, R</div>

</div>
</div>
<div>
  <p>
    I graduated in mathematics. I started as a C++ developer. Soon after I transitioned to an Erlang based project. Since then my professional career is connected to it. 
    I was part of Agile teams developing telecommunication solutions. The technical stack based on Linux, Git as the project version control system, and Jenkins for CI/CD. 
    The teams I worked in were tasked with the end-to-end process of delivering solutions. I was usually responsible for:
  </p>
    <ul>
      <li> analyzing requirements </li>
      <li>evaluating feasibility, designing, and implementing solutions</li>
        <li>writing automated tests.</li>
        </ul>
  <p>
Outside of the job, from time to time, I also program my projects. Python is my favorite scripting language. 
I usually use Anaconda to have access to libraries like Numpy, Pandas, and Jupyter. The page you are reading now is written in Svelte. 
It is converted from my old React page. I also used AngularJs a long time ago. I'm keeping most of my projects on Github, sometimes Gitlab. 
Of course, I tried a lot more various technologies and languages, but there is no goal to list them all. I am open to learning more.
  </p>
    

</div>

<style>
    ul {
     margin-left: 10%;
     text-align: justify;
     
    }
    li { 
   margin-bottom: 0.5rem;  
}
  p {
    margin-left: 2rem;
    margin-right: 2rem;
    text-align: justify;    
    padding-top: 1rem;
    margin-top: 0;
    text-indent: 0rem;
  }
  .d3 {
    height: 200px;
    display: flex;
    margin: 0;
    justify-content: center;
    padding: 0;
  }
  .grid-output {
    display: grid;
    margin-left: 15%;
    padding: 0;
    grid-template-columns: 1fr 2fr ;
    grid-template-rows: 1fr;
    grid-gap: 0.5rem;
    margin-bottom: 0;
  }

 
  div {
    margin-left: 5%;
    margin-right: 5%;
    text-align: right;

    visibility:visible;
    background-color: rgba(255,255,255,0.8);

    }
  .table-main {
    font-size: var(--the-font-size);
  
    
    display: flex;
    justify-content: left;
  }
</style>
