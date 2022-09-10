<script lang="ts">
    import { watchResize } from "svelte-watch-resize";
    import "@google-web-components/google-chart";

    export let cols: {
        label: string;
        type: string;
    }[] = [
        { type: "string", label: "Term" },
        { type: "string", label: "Name" },
        { type: "date", label: "Start" },
        { type: "date", label: "End" },
    ];

    let mainWidth: number;

    function handleMainResize(node: HTMLElement) {
        mainWidth = node.clientWidth;
    }

    export let rows: [string, string, Date, Date][] = [
        ["Employment", "Ericpol", new Date(2012, 2, 1), new Date(2015, 7, 31)],
        [
            "Project",
            "Ericsson MTAS",
            new Date(2012, 5, 1),
            new Date(2013, 12, 31),
        ],
        [
            "Project",
            "Ericsson SBG",
            new Date(2014, 1, 1),
            new Date(2022, 3, 31),
        ],
        ["Employment", "DEK", new Date(2015, 8, 1), new Date(2022, 3, 31)],
        ["Employment", "Telia", new Date(2022, 4, 1), new Date()],
        ["Project", "ACE Core", new Date(2022, 4, 1), new Date()],
    ];
    export let title: String = "";
    export let sliceVisibilityThreshold: number = 0;
</script>

<div
    class="div-chart"
    style="height: {20 * rows.length}px;
    margin-left: {0.05 * mainWidth}px;
    margin-bottom: {250 + 20 * rows.length}px;"
    use:watchResize={handleMainResize}
>
    <google-chart
        class="mainContent"
        type="timeline"
        {cols}
        {rows}
        options={{
            timeline: {
                barLabelStyle: { fontSize: 20 },
                showRowLabels: true,
                groupByRowLabel: false,
            },
            width: mainWidth * 0.9 - 150,
            height: 200 * rows.length,
            title,
            backgroundColor: "transparent",
            titleTextStyle: { fontSize: 19, color: "#737373" },
            sliceVisibilityThreshold,
        }}
    />
</div>

<style>
    .div-chart {
        width: 100vw;

        margin-left: auto;
        margin-right: auto;
        align-items: center;
        padding: 0;
        display: block;
    }
    .mainContent {
        margin: 0;
        padding: 0;
        align-items: center;
        display: block;
    }
</style>
