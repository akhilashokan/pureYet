import { useState, useEffect, useRef } from "react";

export default function LoadSelect({ country, limit, cityChangeHandler, selectedCity, dateChangeHandler, selectedDate }) {
    const [cities, setCities] = useState([{
        "country": "",
        "city": "",
        "count": 0,
        "locations": 0,
        "firstUpdated": '',
        "lastUpdated": '',
        "parameters": []
    }])
    useEffect(() => {
        const options = { method: 'GET', headers: { Accept: 'application/json' } };
        var queryCities = `cities?limit=${limit}&page=1&offset=0&sort=asc&country=${country}&order_by=city`
        fetch('https://api.openaq.org/v2/' + queryCities, options)
            .then(response => response.json())
            .then(response => setCities(response.results))
            .catch(err => console.error(err));
    }, [limit, country])


    return (
        <>
            <select name="city" id="_city" onChange={cityChangeHandler} >
                <option value=''>select your city</option>
                {cities.map((data, key) => {
                    return (
                        <option key={key} value={data.city}>{data.city}</option>
                    )
                })}
            </select>
            {selectedCity && <input type="date" onChange={dateChangeHandler} value={selectedDate} name="date" id="_date" />}
        </>
    )
}