import dynamic from 'next/dynamic';
import React from 'react'
const Chart = dynamic(import("react-apexcharts"), {
    ssr: false
});

export default function PieChart() {

    const data = {

        series: [44, 5, 21],
        options: {
            chart: {
                width: 380,
                type: 'donut',
                dropShadow: {
                    enabled: true,
                    color: '#111',
                    top: -1,
                    left: 3,
                    blur: 3,
                    opacity: 0.2
                }
            },
            stroke: {
                width: 0,
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                showAlways: true,
                                show: true
                            }
                        }
                    }
                }
            },
            labels: ["Left Volume", "Center Volume", "Right Volume"],
            dataLabels: {
                dropShadow: {
                    blur: 3,
                    opacity: 0.8
                }
            },
            // fill: {
            //     type: 'pattern',
            //     opacity: 1,
            //     pattern: {
            //         enabled: false,
            //         style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
            //     },
            // },
            states: {
                hover: {
                    filter: 'none'
                }
            },
            theme: {
                palette: 'palette1'
            },
            // title: {
            //     text: "Matrix Volumes"
            // },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 350
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    };

    return (
        <Chart options={data.options}
            series={data.series}
            type="donut"
            width={380}
        />
    )
}
