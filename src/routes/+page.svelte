<script lang="ts">
    
</script>

<a href="/posts">
    It is just a loading page for SEO. Click to go to the postlist.
</a>
    <div class="triangle-container">
        <svg height="600" width="80%">
            <g  class="triangle" width="80%">       
              <circle class="circle-yellow" cx="250" cy="60"   r="20" fill="rgba(255, 255, 0)" />
              <circle class="circle-red" cx="100" cy="400"   r="25" fill="rgba(240, 20, 11,0.8)" />
              <circle class="circle-blue" cx="400" cy="400" r="40" fill="rgba(24, 240, 211)" /></g>
              Sorry, your browser does not support inline SVG.
        </svg>
  </div>

<style>
  .circle-yellow {
   filter: drop-shadow( 0px 0px 20px rgba(255, 255, 0, .9));
   }  
   .circle-red {
   filter: drop-shadow( 0px 0px 20px rgba(255, 0, 0, .9));
   }  
 .circle-blue {
   filter: drop-shadow( 0px 0px 20px rgba(24, 240, 211, 0.9));
   }  

.triangle-container{
    animation: myshift 15s infinite;
    fill:transparent;
  width: 100%;
  
  text-align:center;
  
} 
.triangle{
    margin-left: 50%;
    animation: mymove 7s infinite;
    transform-origin: 250px 250px;
    
}

@keyframes mymove {
     
 0%   {transform: rotate(0deg);}
 30%   {transform: rotate(-180deg);}
 100% {transform: rotate(-360deg);}


}
@keyframes myshift {
     
     0%   {margin-left: 0;}
     70%   {margin-left: 80%;}
     100% {margin-left: 0;}
    
     
    
    }

  a {
     
        margin-right: 5%;
        font-size: 2rem;
        text-align: center;
        letter-spacing: 0.3ch;
        text-decoration: none;
        color: var(--text-secondary);
        background-color: none;
        height: 5vh;
        width: 95%;
        position: absolute;
    }
  

</style>
