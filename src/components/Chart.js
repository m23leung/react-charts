import React from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'
import '../Chart.css'

function Chart(props) {

    var displayTitle = true;
    var displayLegend = true;
    var legendPosition = 'right';

    return (
        <div className="chart">
            <Bar 
                data={props.chartData}
                options={{
                    title:{
                        display: displayTitle,
                        text: `Largest Cities in ${props.location}`,
                        fontSize: 25
                    },
                    legend: {
                        display: displayLegend,
                        position: legendPosition
                    },
                    pan: {
                        enabled:  true,
                        mode: "xy",
                        speed: 10
                    },
                    zoom: {
                        enabled: true,
                        drag: false,
                        mode: "xy",
                        rangeMin: {
                            x: 0,
                            y: 0
                        },
                        rangeMax: {
                            x: 500,
                            y: 500
                        }
                    }

                }}
            />
            <Line 
                data={props.chartData}
                options={{
                    title:{
                        display: displayTitle,
                        text: `Largest Cities in ${props.location}`,
                        fontSize: 25
                    },
                    legend: {
                        display: displayLegend,
                        position: legendPosition
                    }

                }}
            />                
        </div>
    )
    }

export default Chart;
