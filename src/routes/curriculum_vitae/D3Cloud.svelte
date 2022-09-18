<script lang="ts">
    import { onMount } from "svelte";
    export let texts : string[];
    onMount(async () => {
        (await import("$lib/assets/jslibs/d3.v7.js")).default;
        (await import("../../lib/assets/jslibs/d3.layout.cloud.js")).default;
        
        loadwordElements();
        
    });
    export let width: number;
    export let height: number;
    
    function loadwordElements() {
    
   d3.layout.cloud().size([width, height])
    .words(texts.map(function(d) {
      return {text: d, size: 10 + Math.random() * 90};
    }))
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw)
    .start();

    function draw(words : string[]) {
       d3.select("#my_canvas")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
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
