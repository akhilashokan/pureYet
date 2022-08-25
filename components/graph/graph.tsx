
import React, { useEffect, useRef, useState } from "react";
import style from "./graph.module.scss"
import Chart from "chart.js";
export default function Graph({ selectedCity, selectedDate }) {
    var ref = useRef()
    const [data, setData] = useState()
    useEffect(() => {
        var encodedURL = encodeURIComponent(new Date(selectedDate).toISOString())
        const options = { method: 'GET', headers: { Accept: 'application/json' } };
        var queryCities = `/measurements?date_from=2000-01-01T00%3A00%3A00%2B00%3A00&date_to=${encodedURL}&limit=100&page=1&offset=0&sort=desc&radius=100&country=in&city=${selectedCity}&order_by=datetime`
        fetch('https://api.openaq.org/v2/' + queryCities, options)
            .then(response => response.json())
            .then(response => setData(response.results))
            .catch(err => console.error(err));
        console.log(new Date(selectedDate).toISOString());
        var config = {
            type: "line",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: 'co2',
                        data: [65, 78, 66, 44, 56, 67, 75],
                    }
                ],
            },
        };
        var chart = new Chart(ref.current, config);
    }, [selectedCity, selectedDate]);
    console.log(data);

    return <>
        <div className={`__card  ${style.graphContainer}`}>
            <div>
                <h4>WIP</h4>
                <canvas id="line-chart" ref={ref}></canvas>
            </div>
        </div>
    </>
}



