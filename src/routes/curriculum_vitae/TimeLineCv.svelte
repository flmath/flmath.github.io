<script lang="ts">
    import { watchResize } from "svelte-watch-resize";
    import "@google-web-components/google-chart";
    import { theme } from '$lib/components/theme.svelte';

    
    let 
    {title = "", sliceVisibilityThreshold = 0} = $props()
    
    let cols: {
        label: string;
        type: string;
    }[] = [
        { type: "string", label: "Term" },
        { type: "string", label: "Name" },
        { type: "date", label: "Start" },
        { type: "date", label: "End" },
    ];

    let mainWidth: number = $state(0);
    function handleMainResize(node: HTMLElement) {
        mainWidth = node.clientWidth;
    }

    // Initialize chartBGColor with a placeholder.
    // The $effect will set the correct initial value after mount and update it on theme changes.
    let chartBGColor = $state('');
$effect(() => {
    const isDarkActive = $theme.darkstate; // Assuming it's a store, or theme.darkstate if it's a signal

    if (typeof document !== 'undefined' && document.documentElement) {
        const newBgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-gchart').trim();
  
        chartBGColor = newBgColor;
    }
});


    let rows: [string, string, Date, Date][] = [
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
        ["Employment", "Telia", new Date(2022, 4, 1), new Date(2022, 10, 1)],
        ["Project", "ACE Core", new Date(2022, 4, 1), new Date(2022, 10, 1)],
	["Employment", "Anydesk GmbH ", new Date(2023, 2, 1), new Date()],
        ["Project", "Anydesk Core", new Date(2023, 2, 1), new Date()],
    ];
 
   
</script>

<div
    class="div-chart"
    style="height: {20 * rows.length}px;
    padding-left: {0.01 * mainWidth}px;
   
    
    padding-top: 30px;
    padding-bottom: {250 + 20 * rows.length}px;"
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
            width: mainWidth * 0.98,
            height: 70 * (rows.length + 1),
            title,            
            backgroundColor: chartBGColor,
            
            titleTextStyle: { fontSize: 19, color: "#37373" },
            sliceVisibilityThreshold,
        }}
    ></google-chart>
</div>

<style>
    div.div-chart {
        width: 96%;

        margin-left: 0;
        margin-right: 0;
        align-items: center;
        color: var(--color-gchart);
        padding: 0;
        display: block;
        visibility: visible;
        background: var(--bg-gchart);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(6.4px);
        -webkit-backdrop-filter: blur(6.4px);
        border: 1px solid rgba(255, 255, 255, 0.4);
    }
    .mainContent {
               color: var(--color-gchart);
        background: var(--bg-gchart);
        margin: 0;
        padding: 0;
        align-items: center;
        display: block;
    }
    google-chart { 
        color: var(--color-gchart);
        background: var(--bg-gchart);
    }

        </style>
