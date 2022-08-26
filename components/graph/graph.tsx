
import React, { useEffect, useRef, useState } from "react";
import style from "./graph.module.scss"
import Chart from "chart.js";
export default function Graph({ selectedCity, selectedCityId, selectedDate }) {
    const [data, setData] = useState([
        {
            "locationId": 0,
            "location": "",
            "parameter": "",
            "value": 0,
            "date": {
                "utc": ""
            },
            "unit": "",
            "entity": "",
            "sensorType": ""
        }
    ])
    const [parameter, setParameter] = useState('pm25')
    useEffect(() => {
        var encodedURL = encodeURIComponent(new Date(selectedDate).toISOString())
        const options = { method: 'GET', headers: { Accept: 'application/json' } };
        var queryCities = `measurements?date_from=2000-01-01T00%3A00%3A00%2B00%3A00&date_to=${encodedURL}&limit=10&page=1&offset=0&sort=desc&parameter=${parameter}&radius=1000&country_id=in&city=${selectedCity}&location_id=${selectedCityId}&order_by=datetime`
        selectedCityId && fetch('https://api.openaq.org/v2/' + queryCities, options)
            .then(response => response.json())
            .then(response => {
                setData(response.results)
            })
            .catch(err => console.error(err));

    }, [selectedCity, selectedDate, selectedCityId, parameter]);

    return <>
        <div className={`__card  ${style.graphContainer}`}>
            <LoadGraph data={data} parameter={parameter} />
        </div>
    </>
}

function LoadGraph({ data, parameter }) {
    var ref = useRef()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        var labelsArray = []
        var dataArray = []
        data.map((value) => {
            labelsArray.push(new Date(value.date.utc).toLocaleString())
            dataArray.push(value.value)
        })
        var config = {
            type: "line",
            data: {
                labels: labelsArray,
                datasets: [
                    {
                        label: parameter,
                        data: dataArray,
                    }
                ],
            },
        };
        var chart = new Chart(ref.current, config);
        chart && setLoading(true)
        return (() => {
            chart.destroy()
        })
    }, [data, parameter])

    return (
        <div className={style.wrapper}>
            {!loading && <h2>loading</h2>}
            <canvas id="line-chart" ref={ref}></canvas>
        </div>
    )
}


