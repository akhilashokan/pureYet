import ReactApexChart from "react-apexcharts"

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
