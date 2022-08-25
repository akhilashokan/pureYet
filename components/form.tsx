import { useState } from "react";
import Graph from "./graph/graph";
import LoadSelect from "./select";

export default function Form() {
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedDate, setDate] = useState('')

    function cityChange(event) {
        const { value } = event.target
        setSelectedCity(value)
    }
    function dateChange(event) {
        setDate(event.target.value)
    }
    return (
        <>
            <div className="_inputs">
                <LoadSelect country='in' limit={100} selectedCity={selectedCity} cityChangeHandler={cityChange} dateChangeHandler={dateChange} selectedDate={selectedDate} />
            </div>
            {selectedCity && selectedDate && <Graph selectedCity={selectedCity} selectedDate={selectedDate} />}
        </>
    )
}


