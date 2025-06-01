<script lang="ts">
  import face from "$lib/assets/face.png";
  import resumePdf from "$lib/assets/resumes/mathias_green.pdf";
  // @ts-ignore
  import resumeOdt from "$lib/assets/resumes/mathias_green.odt";
</script>

<div class="glass table-main">
  <div class="grid-output-external">
    <div class="table-main">
      <div class="grid-output">
        <div>Name:</div> <div>Mathias Green</div>
        <div>Address:</div> <div>Germany</div>

        <div>Mail:</div>
        <div>
          <a
            href="mailto:flmathematic@gmail.com?subject=Hello,%20I%20have%20found%20your%20web%20CV!"
            target="_top">flmathematic</a>
        </div>

      <div> </div> <div class="grid-output-small"> </div>  
      
        <div>Linkedin profile:</div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mathias-green">mathias-green</a>
        </div>

        <div>Github account:</div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/flmath">flmath</a
            >
        </div>

        <div>Coursera profile:</div>
        <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.coursera.org/learner/matt-b-3426">link</a>
          </div>         
        

        <div>Resume:</div>
        <div class="grid-output-small">
            <a target="_blank" rel="noopener noreferrer" href={resumePdf}>PDF</a
            >
          <div>
            <a href={resumeOdt}>ODT</a>
          </div>
        </div>
      </div>
    </div>
    
  </div>

  <img src={face} alt="Face" />
  
</div>

<style>
  .grid-output-external {
    display: grid;
    margin-left: 5%;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    
     }
  .grid-output {
  
  
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 0.5rem;
    
  }
  .grid-output-small {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 0.5rem;
    text-align: right;
        
  }
  div {
    margin-left: 2%;
    margin-right: 5%;
    text-align: right;

 

    }
  .table-main {
    padding: 1rem;
    font-size: var(--the-font-size);
    margin-left: 1rem;
    display: flex;
    justify-content: center;
  }

  img {
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    background: none;
    font-size: 1rem;
    letter-spacing: 0.3ch;
    width: 250px;
    height: 250px;
    margin: 0;
    padding: 0;
    
    position: inline;
  }

  @media (max-width: 640px) {
        img {
        display: none;    
        }
        .grid-output-external {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    
     }
    }
</style>
