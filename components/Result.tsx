import { Suspense } from "react";
import Graph from "./Graph";

const RATING = ['Good', 'Fair', 'Poor', 'Very Poor', 'Extremely Poor'];
const RATING_COLORS = ['#78BC61', '#C0C781', '#FF7F11', '#F34213', '#D00000'];

export default function Result({ data }) {
    const current = data?.current;
    const pm2_5 = current?.pm2_5
    const pm10 = current?.pm10
    const time = current?.time
    const parsedTime = new Date(time)
    const pm2_5Rating = getPm25result(pm2_5)
    const pm10Rating = getPm10result(pm10)
    return (
        <div className="mt-4">
            <div className="grid grid-cols-3 gap-4">
                <ResultCard label='pm2.5' rating={pm2_5Rating} value={pm2_5} />
                <ResultCard label='pm10' rating={pm10Rating} value={pm10} />
                <ResultCard label='pm10' rating={pm10Rating} value={pm10} />
            </div>
            <div className="flex mt-4 w-fit overflow-hidden rounded-lg">
                {RATING_COLORS.map((color, index) => (
                    <div
                        className="w-4 h-4"
                        style={{ backgroundColor: color }}
                        key={index}
                        title={RATING[index]}
                    ></div>
                ))}
            </div>
            <div className="mt-2">
                {parsedTime.toLocaleString('default', { day: '2-digit', month: 'long', year: 'numeric', dayPeriod: 'long', hour: '2-digit' })}
            </div>
            <Suspense fallback={<>loading</>}>
                <Graph data={data} />
            </Suspense>
        </div>
    )
}

function ResultCard({ label, rating, value }) {
    const rating_label = RATING.at(rating)
    const rating_color = RATING_COLORS.at(rating);

    return (
        <div
            className="rounded-lg p-5 text-center text-black "
            style={{ backgroundColor: rating_color }}
        >
            <h4>{label} - {value}</h4>
            <p>{rating_label}</p>
        </div>
    )
}

function getPm25result(pm2_5: number) {
    if (pm2_5 <= 25) return 0
    if (pm2_5 <= 50) return 1
    if (pm2_5 <= 100) return 2
    if (pm2_5 <= 300) return 3
    return 4
}
function getPm10result(pm10: number) {
    if (pm10 <= 25) return 0
    if (pm10 <= 50) return 1
    if (pm10 <= 100) return 2
    if (pm10 <= 300) return 3
    return 4
}