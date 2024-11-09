import React, { useEffect, useState } from "react";
export default function InfoCard({ selectedCity, selectedDate, setLocationId }) {
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
            .then(response => {
                setMeasurements(response.results)
                setLocationId(response.results[0].locationId)
            })
            .catch(err => console.error(err));
    }, [selectedCity, setLocationId])

    let dateObj = new Date(selectedDate)
    let formatedDate = `${dateObj.toDateString()} at ${dateObj.toLocaleTimeString()}`

    return <>
        <div >
            {measurements[0].locationId ?
                measurements.map((data, key) => {
                    return (<div key={key}>
                        <header >
                            <h2>Info</h2>
                            <div >
                                <div>
                                    <h3>{data.city}</h3>
                                    <p>ID: {data.locationId}</p>
                                </div>
                                <div >
                                    <h3>Coordinates</h3>
                                    <p>lat:{data.coordinates.latitude}</p>
                                    <p>long:{data.coordinates.longitude}</p>
                                </div>
                            </div>
                        </header>
                        <div >
                            <h2>Measurements</h2>
                            <div >
                                <div >
                                    <div >
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



