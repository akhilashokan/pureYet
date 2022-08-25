import React, { useEffect, useState } from "react";
import style from "./infoCard.module.scss"
export default function InfoCard({ selectedCity, selectedDate }) {
    const [measurements, setMeasurements] = useState([{
        "locationId": 0,
        "location": "",
        "parameter": "",
        "value": 0,
        "unit": "",
        "date": {
            "utc": "",
        },
        "coordinates": {
            "latitude": 0,
            "longitude": 0
        },
        "city": "Agra",
        "isMobile": false,
        "entity": "government",
        "sensorType": "reference grade"
    }])

    useEffect(() => {
        const options = { method: 'GET', headers: { Accept: 'application/json' } };
        var queryCities = `/measurements?limit=1&page=1&offset=0&sort=desc&radius=1000&country=in&city=${selectedCity}&order_by=datetime`
        fetch('https://api.openaq.org/v2/' + queryCities, options)
            .then(response => response.json())
            .then(response => setMeasurements(response.results))
            .catch(err => console.error(err));
    }, [selectedCity])
    let dateObj = new Date(selectedDate)
    let formatedDate = `${dateObj.toDateString()} at ${dateObj.toLocaleTimeString()}`
    console.log('selectedDate', dateObj.getDate());
    console.log('measurements', measurements);

    return <>
        <div className={`__card ${style.cards}`}>
            {measurements[0].locationId ?
                measurements.map((data, key) => {
                    return (<div key={key} className={style.card}>
                        <header className={style.header}>
                            <h2>Info</h2>
                            <div className={style.info}>
                                <div>
                                    <h3>{data.city}</h3>
                                    <p>ID: {data.locationId}</p>
                                </div>
                                <div className={style.cords}>
                                    <h3>Coordinates</h3>
                                    <p>lat:{data.coordinates.latitude}</p>
                                    <p>long:{data.coordinates.longitude}</p>
                                </div>
                            </div>
                        </header>
                        <div className={style.measurements}>
                            <h2>Measurements</h2>
                            <div className={style.measurement}>
                                <div className={style.block}>
                                    <div className={style.measure}>
                                        <h3>{data.parameter}</h3>
                                        <p>{data.value} <small>{data.unit}</small></p>
                                    </div>
                                    <small>as of {formatedDate}</small>
                                </div>
                            </div>
                        </div>
                    </div>)
                }) :
                <h2>Loading...</h2>
            }
        </div>
    </>
}



