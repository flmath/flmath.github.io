<hr />
<!-- style="background-image: url('{background}')" -->
<h2><div><slot /></div></h2>
<hr />

<style>
  hr {
    color: white;
  }

  div {
    width: 100vw;
    display: table-cell;
    vertical-align: middle;
  }

  h2 {
    opacity: 0.65;
    height: 3rem;
    margin: 0;
    display: table;
    background: rgb(0, 191, 255);
    background: linear-gradient(
      27deg,
      rgba(0, 191, 255, 1) 16%,
      rgba(255, 255, 0, 1) 56%,
      rgba(188, 33, 34, 1) 100%
    );
  }
</style>
