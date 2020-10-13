import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from './components/Chart';
import Chart2 from './components/Chart2';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import * as Zoom from "chartjs-plugin-zoom";
import Button from './components/button/button';

function getRandomColors(numOfBars) {
  const letters = "0123456789ABCDEF".split("");
  let colors = [];
  for (let i = 0; i < numOfBars; i++) {
      let color = "#";
      for (let k = 0; k < 6; k++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      colors.push(color);
  }
  return colors;
}

function App() {
  
  //const [state, setState] = useState( { chartData: {} });
  
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    getChartData();
  }, [])

  function getChartData() {

    const labels = ['Altona', 'Craigieburn', 'Cairn Downs', 'Camberwell', 'Tiempo'];
    const data =   [111, 222, 33, 444, 155];

    // TODO: set AJAX Call
    setChartData({
          labels: labels,
          datasets: [
              {
                  label: 'Population',
                  data: data,
                  //backgroundColor: 'green'
                  backgroundColor: getRandomColors(labels.length),
                  borderWidth: 1,
                  borderColor: '#777',
                  hoverBorderWidth: 3,
                  hoverBorderColor: '#000'
              }
          ]
    });
  }

  return (
    <div className="App">

    <ReactBootStrap.Navbar bg="danger" expand="lg" variant="dark">
    <ReactBootStrap.Navbar.Brand href="#home">Global Survey Results</ReactBootStrap.Navbar.Brand>

    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#link">Link</ReactBootStrap.Nav.Link>
          <ReactBootStrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>      
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>

    <div style={{width: "750px", height: "750px", marginLeft: "auto", marginRight: "auto" }}>
      <Chart legendPosition="top" location="New South Wales" chartData={chartData} />
      <Chart2 />
    </div>

      <Button label="click me please"></Button>
    </div>
  );
}

export default App;

