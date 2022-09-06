
<svelte:head>
	
</svelte:head>

<script>
  import "$lib/assets/ExternalLibs/loader.js";  

  google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('string', 'Resource');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['Ericpol', 'Ericpol', 'Ericpol',
         new Date(2012, 2, 1), new Date(2015, 7, 1), null, 100, null],
        ['EricssonMTAS', 'Ericsson MTAS', 'MTAS',
         new Date(2012, 5, 1), new Date(2013, 12, 31), null, 100, null],
         ['EricssonSBG', 'Ericsson SBG', 'ESBG',
         new Date(2014, 1, 1), new Date(2022, 3, 31), null, 100, null],
         ['DEK Q-team', 'DEK Q-team', 'DEKQ',
         new Date(2015, 8, 1), new Date(2017, 7, 1), null, 100, null],
         ['DEK UNI', 'DEK UNI', 'DEKUNI',
         new Date(2017, 7, 1), new Date(2022, 3, 31), null, 100, null],
         ['Telia', 'Telia ACE Core', 'TeliaAce',
         new Date(2022, 4, 1), new Date(), null, 100, null],
      ]);

      var options = {
        height: 300,
        gantt: {
          trackHeight: 30
        }
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

      chart.draw(data, options);
    }

  
 
</script>

<div id="chart_div"></div>




<style>
  .container {
    max-width: 100vw;
    margin: 0 auto;
    padding: 0px;
  }

  .chart {
    display: grid;
    border: 2px solid #000;
    position: relative;
    overflow: hidden;
  }

  .chart-row {
    display: grid;
    grid-template-columns: 30px 1fr;
    background-color: #dcdcdc;
  }

  .chart-period {
    color: #fff;
    background-color: #708090 !important;
    border-bottom: 2px solid #000;
    grid-template-columns: 30px repeat(12, 1fr);
  }

  .chart-period > span {
    text-align: center;
    font-size: 13px;
    align-self: center;
    font-weight: bold;
    padding: 15px 0;
  }

  .chart-lines {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: transparent;
    grid-template-columns: 50px repeat(12, 1fr);
  }

  .chart-lines > span {
    display: block;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }

  .chart-row-item {
    background-color: #808080;
    border: 1px solid #000;
    border-top: 0;
    border-left: 0;
    padding: 20px 0;
    font-size: 15px;
    width: 6rem;
    font-weight: bold;
    text-align: center;
  }

  .chart-row-bars {
    list-style: none;
    display: grid;
    padding: 15px 0;
    margin: 0;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 10px 0;
    border-bottom: 1px solid #000;
  }

  li {
    margin-left: 5rem;
    font-weight: 450;
    text-align: left;
    font-size: 15px;
    min-height: 15px;
    background-color: #708090;
    padding: 5px 15px;
    color: #fff;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    border-radius: 15px;
  }

  ul .chart-li-one {
    grid-column: 1/2;
    background-color: #588bae;
  }
</style>
