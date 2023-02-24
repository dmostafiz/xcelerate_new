import dynamic from 'next/dynamic';
import React from 'react'
const Chart = dynamic(import("react-apexcharts"), {
    ssr: false
});

export default function AreaChart() {

    const data = {

        series: [{
            // name: "STOCK ABC",
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
        options: {
            theme: {
                palette: 'palette6' // upto palette10
            },
            grid: {
                show: false
            },
            legend: {
                show: true
            },
            annotations: {
                position: 'front'
            },
            chart: {
                background: 'transparent',
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            // stroke: {
            //     curve: 'straight'
            // },

            // title: {
            //     text: 'Fundamental Analysis of Stocks',
            //     align: 'left'
            // },
            // subtitle: {
            //     text: 'Price Movements',
            //     align: 'left'
            // },
            labels: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
            xaxis: {
                show: false,
                position: 'bottom',
                type: 'datetime',
            },
            yaxis: {
                show: false,
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            }
        }


    };

    return (
        <Chart options={data.options}
            series={data.series}
            type="bar"
            width={380}
        />
    )
}
