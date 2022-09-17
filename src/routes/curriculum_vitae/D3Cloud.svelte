<script lang="ts">
    import { onMount } from "svelte";

    onMount(async () => {
        (await import("$lib/assets/jslibs/d3.v7.js")).default;
        loadwordElements();
    });
    export let width: number;
    export let height: number;

    function loadwordElements() {
        let data = [
            {
                os: "Android",
                share: 82.8,
            },
            {
                os: "iOS",
                share: 13.9,
            },
            {
                os: "Win",
                share: 2.6,
            },
            {
                os: "BB",
                share: 2.6,
            },
            {
                os: "",
                share: 0.3,
            },
        ];

        let radius = Math.min(width, height) / 2 - 10;

        let svg = d3
            .select("#my_canvas")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr(
                "transform",
                "translate(" + width / 2 + "," + height / 2 + ")"
            );

        let color = d3
            .scaleOrdinal()
            .range(["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9"]);
        let pie = d3.pie();
        pie.value(function (d) {
            return d.share;
        });

        let pieData = pie(data);
        let arc = d3.arc();

        arc.outerRadius(radius);
        arc.innerRadius(0);

        let groups = svg.selectAll("g").data(pieData).enter().append("g");

        groups
            .append("path")
            .attr("d", arc)
            .style("fill", (d) => color(d.data.os));

        groups
            .append("text")
            .text((d) => d.data.os)
            .attr("transform", (d) => "translate(" + arc.centroid(d) + ")")
            .attr("dy", ".35em")
            .style("text-anchor", "middle")
            .style("font-size", "10px");
    }
</script>

<svg id="my_canvas" />

<style>
    #my_canvas {
        z-index: 1;
        position: inline;
        padding: 0;
        margin: 0;
    }
</style>
