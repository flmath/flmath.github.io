<div class="glass table-main">
  <div class="grid-output">
    <div>2011:</div>
    <div>
      Faculty of Mathematics and Computer Science of the Jagiellonian
      University:
      <br />
      Master of Science in Computational Mathematics
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

  .table-main {
    padding: 1rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--the-font-size);
  }

  div {
    margin-left: 5%;
    margin-right: 5%;
    visibility: visible;
  }

  @media only screen and (max-width: 600px) {
    .grid-output {
      display: grid;
      grid-template-columns: repeat(1, 80%);
      grid-template-rows: repeat(1, 2rem);
      grid-gap: 0.1rem;
    }

    .colone {
      visibility: hidden;
    }
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
