<script>
  import "$lib/assets/ExternalLibs/loader.js";

  google.charts.load("current", { packages: ["timeline"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var container = document.getElementById("chart_div");
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: "string", id: "Term" });
    dataTable.addColumn({ type: "string", id: "Name" });
    dataTable.addColumn({ type: "date", id: "Start" });
    dataTable.addColumn({ type: "date", id: "End" });

    dataTable.addRows([
      ["Employment", "Ericpol", new Date(2012, 2, 1), new Date(2015, 7, 31)],
      [
        "Project",
        "Ericsson MTAS",
        new Date(2012, 5, 1),
        new Date(2013, 12, 31),
      ],
      ["Project", "Ericsson SBG", new Date(2014, 1, 1), new Date(2022, 3, 31)],
      ["Employment", "DEK Q-team", new Date(2015, 8, 1), new Date(2017, 7, 1)],
      ["Employment", "DEK UNI", new Date(2017, 7, 1), new Date(2022, 3, 31)],
      ["Employment", "Telia", new Date(2022, 4, 1), new Date()],
      ["Project", "ACE Core", new Date(2022, 4, 1), new Date()],
    ]);

    var options = {
      timeline: {},
    };

    chart.draw(dataTable, options);
  }
</script>
<!-- implement update on resize -->
<span id="chart_div" />

<style>
  #chart_div {
    max-width: 95vw;
    margin: 0;
    padding: 0;
    display: block;
    align-items: center;
  }
</style>
