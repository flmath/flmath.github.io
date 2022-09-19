
<!-- style="background-image: url('{background}')" -->

<h2><div><slot /></div></h2>


<style>
 

  div {
    width: 100vw;
    display: table-cell;
    vertical-align: middle;

    /* linear-gradient(to right top, #fdfdfd, #f3f3f3, #f1f1f1, #eeeeee, #fdfdfd); */
    
  }

  h2 {
    width: 100%;
    opacity: 0.85;
    height: 2rem;
    font-size: 1rem;
    margin: 0;
    margin-left: 1rem;
    
    padding: 0;
    text-indent: 1rem;
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
