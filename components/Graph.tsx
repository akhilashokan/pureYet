'use client'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false }); // window not found fix | https://medium.com/@farrel.abyansyah/how-to-use-apexcharts-in-a-next-js-project-96e413bc9b31

export default function Graph({ data }) {
    console.log(data);
    const hourly = data?.hourly;
    const pm2_5 = hourly?.pm2_5
    const options = {
        series: [
            {
                name: 'pm2.5',
                data: pm2_5
            }
        ],
    }
    return (
        <div className="mt-2">
            <ReactApexChart options={{ chart: { type: 'line' } }} series={options.series} height={350} width={400} />
        </div>
    )
}
