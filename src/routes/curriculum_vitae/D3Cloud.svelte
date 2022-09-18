<script lang="ts">
    import { onMount } from "svelte";
    let layout;
    var cloud;
    onMount(async () => {
        (await import("$lib/assets/jslibs/d3.v7.js")).default;
        cloud = (await import("../../lib/assets/jslibs/d3.layout.cloud.js")).default;
        
        loadwordElements();
        
    });
    export let width: number;
    export let height: number;
    
    function loadwordElements() {
      
    layout = cloud()
    .size([width, height])
    .words([
      "Hello", "world", "normally", "you", "want", "more", "words",
      "than", "this"].map(function(d) {
      return {text: d, size: 10 + Math.random() * 90, test: "haha"};
    }))
    .padding(5)
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);

layout.start();


    }

    function draw(words : string[]) {
       d3.select("#my_canvas")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "Impact")
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
}


</script>

<svg id="my_canvas" />

<style>
    #my_canvas {
        z-index: 2;
        position: block;
        padding: 0;
        margin: 0;
    }
</style>
