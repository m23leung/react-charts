import React, {useState, useEffect} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'
import '../Chart.css'
import axios from 'axios';

//TODO : TRY TO SEPARATE AXIOS CALL AND THE CHART RENDER INTO TWO DIFF FUNCTIONS

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

function renderLineChart(chartData) {
    return (
        <Line data={chartData} options={{
            responsive: true,
            title:  {text: 'THICKNESS SCALE', display: true},
            scales: {
                yAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true
                    },
                    gridLines: {
                        display: false,
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }]
            }
        }} />
    )
}

function renderBarChart(chartData) {
    return (
        <Bar data={chartData} options={{
            responsive: true,
            title:  {text: 'THICKNESS SCALE', display: true},
            scales: {
                yAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true
                    },
                    gridLines: {
                        display: false,
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }]
            }
        }} />
    )
}

function Chart2 () {
    const [chartData, setChartData] = useState({});
    const [employeeSalary, setEmployeeSalary] = useState({});
    const [employeeAge, setEmployeeAge] = useState({});
    
    const chart = () => {
        let empSal = [];
        let empAge = [];

        axios.get("http://dummy.restapiexample.com/api/v1/employees")
            .then(res => {
                console.log(res);
                for(const dataObj of res.data.data) {
                    empSal.push(parseInt(dataObj.employee_salary));
                    empAge.push(parseInt(dataObj.employee_age));
                }

                setChartData({
                    labels: empAge,
                    datasets: [
                        {
                            label: 'level of the thickness',
                            data: empSal,
                            backgroundColor: getRandomColors(empAge.length),
                            borderWidth: 1,
                            borderColor: '#777',
                            hoverBorderWidth: 3,
                            hoverBorderColor: '#000'                    
                        }
                    ]
                })

            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        chart();
    }, [])
    
    return (
        <div>
            {renderBarChart(chartData)}
            {renderLineChart(chartData)}
        </div>
    )
}

export default Chart2;
