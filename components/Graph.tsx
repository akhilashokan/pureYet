'use client'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false }); // window not found fix | https://medium.com/@farrel.abyansyah/how-to-use-apexcharts-in-a-next-js-project-96e413bc9b31

export default function Graph({ data }) {
    const hourly = data?.hourly;
    const pm2_5 = hourly?.pm2_5
    const pm10 = hourly?.pm10
    const time = hourly?.time
    const series = [
        {
            name: 'pm2.5',
            data: pm2_5
        }, {
            name: 'pm10',
            data: pm10
        }
    ]
    return (
        <div className="mt-4">
            <ReactApexChart options={{ ...options, labels: time }} series={series} height={350} />
        </div>
    )
}

const options: ApexCharts.ApexOptions = {
    chart: {
        type: 'area',
        toolbar: {
            show: false,
        }
    }, dataLabels: {
        enabled: false
    }, stroke: {
        curve: 'smooth'
    }, xaxis: {
        type: 'datetime',
        tickAmount: 10,
        axisTicks: {
            show: false
        },
        labels: {
            format: 'dd MMM yy hh:mm'
        }
    }, tooltip: {
        fillSeriesColor: true,
        x: {
            show: false
        },
    }
}