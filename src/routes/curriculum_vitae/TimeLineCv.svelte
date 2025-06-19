<script lang="ts">
    import { watchResize } from "svelte-watch-resize";
    import "@google-web-components/google-chart";
    import { theme } from '$lib/components/theme.svelte';
    import { onMount } from 'svelte';

    let googleChartElement: HTMLElement & { shadowRoot: ShadowRoot | null, imageURI?: string | null, redraw?: () => void, selection?: any[] }; // For bind:this
    
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
    // The $effect will set the correct initial values after mount and update them on theme changes.
    let chartTextColor = $state(''); // State variable for text color
    let chartBGColor = $state(''); // This will be updated by the $effect below
    function setFill(textEndElements: any[] | NodeListOf<Element> | undefined, textStartElements: any[] | NodeListOf<Element> | undefined) {
        if (textStartElements ) {
            textStartElements.forEach((element: { setAttribute: (arg0: string, arg1: string) => void; }) => {
               element.setAttribute('fill', chartTextColor);
            });
        }
        if (textEndElements ) {
            textEndElements.forEach((element: { setAttribute: (arg0: string, arg1: string) => void; }) => {
               element.setAttribute('fill', chartTextColor); // Use chartTextColor
            });
    }}

    function getTextElements(event: CustomEvent) {
        const chartHostElement = event.target as HTMLElement & { shadowRoot: ShadowRoot };
        const chartDivInShadow = chartHostElement.shadowRoot?.getElementById('chartdiv');
        const textEndElements = chartDivInShadow?.querySelectorAll('text[text-anchor="end"]');
        const textStartElements = chartDivInShadow?.querySelectorAll('text[text-anchor="start"]');

        console.log('chartdiv from ready event target:', chartDivInShadow);
        return { textEndElements, textStartElements };
}
    $effect(() => {
    // This $effect is primarily for reacting to theme changes to update chartBGColor.
    // It also updates chartTextColor based on CSS variables.
    const _isDarkActive = $theme.darkstate; // Ensure $theme.darkstate is a dependency

    if (typeof document !== 'undefined' && document.documentElement) {
        const rootStyle = getComputedStyle(document.documentElement);
        chartBGColor = rootStyle.getPropertyValue('--bg-gchart').trim();
        chartTextColor = rootStyle.getPropertyValue('--color-gchart').trim(); // Get text color


    }
    });

    function handleChartReady(event: CustomEvent) {
        console.log('Chart is ready (declarative)! Event detail:', event.detail);
        const chart = event.detail.chart; // The raw Google Chart object
        const {textEndElements, textStartElements} = getTextElements(event);
        setFill(textEndElements, textStartElements);
         
   }
    //====================================================
    // Highly suboptimal, google charts are disappointing
    // move to https://observablehq.com/@tezzutezzu/world-history-timeline
    //====================================================
    function handleChartMouseOut(event: CustomEvent) {
        console.log('Chart mouse out (declarative)! Event detail:', event.detail);
        // event.detail.data contains the Google Charts event arguments for 'onmouseout'
        // This typically includes {row: number, column: number}
        const mouseOutData = event.detail.data; // This seems incorrect, mouseout event detail might not have 'data'
        if (mouseOutData && typeof mouseOutData.row === 'number') { // Check if row exists, indicating a data point mouseout
         const {textEndElements, textStartElements} = getTextElements(event);  
        if (textStartElements ) {
            textStartElements.forEach(element => {
                element.setAttribute('fill', '#fff');
            });
        }
        if (textEndElements ) {
            textEndElements.forEach(element => {
                element.setAttribute('fill', chartTextColor); // Use chartTextColor
            });
        } 
        }}

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

    onMount(() => {
        if (googleChartElement) {
            const programmaticReadyHandler = (event: Event) => {
                console.log('Chart is ready (programmatic)! Event detail:', (event as CustomEvent).detail);
                // Access chartdiv if needed, similar to handleChartReady
                const chartDivInShadow = googleChartElement.shadowRoot?.getElementById('chartdiv');
                
                console.log('chartdiv (programmatic ready):', chartDivInShadow);
            };
            googleChartElement.addEventListener('google-chart-ready', programmaticReadyHandler);
            
            const programmaticMouseOutHandler = (event: Event) => {
                const customEvent = event as CustomEvent;
                console.log('Chart mouse out (programmatic)! Event detail:', customEvent.detail);
                const mouseOutData = customEvent.detail.data;
                if (mouseOutData && typeof mouseOutData.row === 'number') {
                    // This block seems incomplete or unnecessary given the declarative handler
                    console.log('Mouse out item (programmatic):', {  });
                }
            };
            googleChartElement.addEventListener('google-chart-onmouseout', programmaticMouseOutHandler);

            // If you no longer need the programmatic select handler, you can remove it.
            // googleChartElement.removeEventListener('google-chart-select', programmaticSelectHandler); // Example if it was stored
        }
    });
   
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
        bind:this={googleChartElement}
        class="mainContent"
        type="timeline"
        events={['onmouseout']}
        {cols}
        {rows}      
        options={{
            // Make sure chartBGColor is defined when options are initially computed
            timeline: {
                barLabelStyle: { fontSize: 20 },
                showRowLabels: true,
                groupByRowLabel: false,
            },
            width: mainWidth * 0.98,
            height: 70 * (rows.length + 1),
            title,            
            backgroundColor: chartBGColor || 'transparent', // Fallback if chartBGColor isn't set yet
            
            titleTextStyle: { fontSize: 19, color: "#37373" },
            sliceVisibilityThreshold,
        }}
        ongoogle-chart-ready={handleChartReady}
        ongoogle-chart-onmouseout={handleChartMouseOut}
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
   

        </style>
