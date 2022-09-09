<script lang="ts">
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

  export let rows: [string, string, Date, Date][] = [
    ["Employment", "Ericpol", new Date(2012, 2, 1), new Date(2015, 7, 31)],
    ["Project", "Ericsson MTAS", new Date(2012, 5, 1), new Date(2013, 12, 31)],
    ["Project", "Ericsson SBG", new Date(2014, 1, 1), new Date(2022, 3, 31)],
    ["Employment", "DEK Q-team", new Date(2015, 8, 1), new Date(2017, 7, 1)],
    ["Employment", "DEK UNI", new Date(2017, 7, 1), new Date(2022, 3, 31)],
    ["Employment", "Telia", new Date(2022, 4, 1), new Date()],
    ["Project", "ACE Core", new Date(2022, 4, 1), new Date()],
  ];
  export let title: String = "";
  export let sliceVisibilityThreshold: number = 0;
</script>

<span class="div-chart">
  <google-chart
    class="chart"
    type="timeline"
    {cols}
    {rows}
    options={{
      timeline: {},
      title,
      backgroundColor: "transparent",
      titleTextStyle: { fontSize: 14, color: "#737373" },
      sliceVisibilityThreshold,
    }}
  />
</span>

<style>
  .div-chart {
    max-width: 95vw;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
  .chart {
    width: 100vw;
    margin: 0;
    padding: 0;
    align-items: center;
  }
</style>
