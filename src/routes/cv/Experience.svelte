<div class="container">
  <div class="chart">
    <div class="chart-row chart-period">
      <div class="chart-row-item" />
      <span>02/2012</span><span>05/2012</span>
      <span>12/2013</span><span>01/2014</span><span>06/2015</span><span
        >07/2015</span      >
      <span>08/2015</span><span>07/2017</span><span>08/2017</span><span
        >03/2022</span>
      <span>04/2022</span><span>Present</span>
    </div>

    <div class="chart-row">  
      <div class="chart-row-item">Ericpol</div> 
      <ul class="chart-row-bars">    
        <li class="chart-li-one">Planning</li>
        
      </ul>
    </div>


  </div>
</div>

<!--<div>
      <Container className="my_transparent_container">
      <div className="timeline">
        <div className="container_leafs left">
          <div className="content">
            <h2>
              08/2015 to present
              <br />
              Ericsson SBG
            </h2>
            <p>
              <br />
              Developing SBG (Session Border Gateway) as a Consultant from DEK
              Sweden.
            </p>
          </div>
        </div>
        <div className="container_leafs right">
          <div className="content">
            <h2>
              07/2017 to present
              <br />
              DEK Sweden - UNI team
            </h2>
            <p>
              <br />
              Developing SBG (Session Border Gateway) at Ericsson.
              Extending registration fault measuring capabilities,
              Support for terminating calls to unregistered users,
              Removal of not compliant headers from incoming SIP messages.
              <br />
              Researching "Matrixes implementations in Erlang" article.
              The office timer extended calculator.
              DEK Machine Learning group participant.
            </p>
          </div>
        </div>
        <div className="container_leafs right">
          <div className="content">
            <h2>
              08/2015 to 07/2017
              <br />
              DEK Sweden - Q team
            </h2>
            <p>
              <br />
              Developing SBG (Session Border Gateway) at Ericsson.
              Introducing features: Media Security Control, Overload Control, Network
              Provided Location Information, and extending WiFi access.
              <br />
              Creating a tool parsing test logs to a SQL database.
              Creating a web GUI for OTP Common Test.
            </p>
          </div>
        </div>
        <div className="container_leafs left">
          <div className="content">
            <h2>
              01/2014 to 06/2015
              <br />
              Ericsson SBG
            </h2>
            <p>
              <br />
                Expanding TLS support for the project. Assessing the efficiency of
                    throttling algorithms for SIP messages with a simulation of nodes (in R language).
                    <br />
                    Writing support scripts for tagging PTA language.
            </p>
          </div>
        </div>
        <div className="container_leafs left">
          <div className="content">
            <h2>
              05/2012 to 12/2013
              <br />
              Ericsson MTAS
            </h2>
            <p>
              <br />
              Developing MTAS (Multimedia Telephony Application Server). Working
              within agile methodology on design (C++), test (TTCN-3), and
              documentation of the IMS node.
            </p>
          </div>
        </div>
        <div className="container_leafs right">
          <div className="content">
            <h2>
              02/2012 to 07/2015
              <br />
              Ericpol
            </h2>
            <p>
              <br />
              Participate in training events and examinations preparing for a supplier role in
              external companies. <br />
              Passed exams from Erlang, TTCN-3, and C++ languages.
              <br />
              Internal in-house training. <br />
              A supplier for MTAS and SBG projects.
              <br />
            </p>
          </div>
        </div>
      </div>{" "}
      </Container>
    </div> -->
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
