import ApexCharts from "apexcharts";

export const ReactApexCharts = (options: any) => {

    const sampleOp = {

        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        options: {
            type: 'bar',
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                    'United States', 'China', 'Germany'
                ],
            }
        },



    }

    var chart = new ApexCharts(document.querySelector("#chart"), sampleOp);
    chart.render();
    return <div id="chart" />

} 