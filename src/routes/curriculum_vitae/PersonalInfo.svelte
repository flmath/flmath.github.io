<script lang="ts">
  import face from "$lib/assets/face.png";
  import resumePdf from "$lib/assets/resumes/mathias_green.pdf";
  // @ts-ignore
  import resumeOdt from "$lib/assets/resumes/mathias_green.odt";
</script>

<div class="table-main">
  <div class="grid-output-external">
    <div class="table-main">
      <div class="grid-output">
        <div>Name:</div>
        <div>Mathias Green</div>
        <div>Address:</div>
        <div>Uppsala, Sweden</div>

        <div>Mail:</div>
        <div>
          <a
            href="mailto:flmathematic@gmail.com?subject=Hello,%20I%20have%20found%20your%20web%20CV!"
            target="_top">flmathematic</a
          >
        </div>
        <div>Linkedin profile:</div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mathias-green">mathias-green</a
          >
        </div>
        <div>Github accounts:</div>
        <div class="grid-output-small">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/flmath">main</a
            >
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/flmath-dirty">secondary</a
            >
          </div>
        </div>

        <div>Resume:</div>
        <div class="grid-output-small">
          <div>
            <a target="_blank" rel="noopener noreferrer" href={resumePdf}>PDF</a
            >
          </div>
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
    grid-template-columns: repeat(2, 20%);
    grid-gap: 20%;
  }
  .grid-output {
    display: grid;
    grid-template-columns: repeat(2, 20rem);
    grid-template-rows: repeat(2, 3rem);
    grid-gap: 0.5rem;
  }
  .grid-output-small {
    display: grid;
    grid-template-columns: repeat(2, 3rem);
    grid-template-rows: repeat(2, 3rem);
    grid-gap: 0.5rem;
  }

  .table-main {
    margin-left: 0;
    display: flex;
    align-items: center;
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
  }
</style>
