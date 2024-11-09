import { useActionState } from "react";
import { getPolutionData } from "../app/actions";
import Graph from "./Graph";

export default function Select({ state }) {
    const [selected, formAction] = useActionState(getPolutionData, null)

    if (!state) return null;
    const results = state?.results || [];
    if (results?.length === 0) return <>no city found.</>

    return (
        <>
            <section className="border p-2 flex gap-2 rounded-lg">
                <p className="text-cyan-50">select your city</p>
                <form action={formAction}>
                    <select name="selectedCity">
                        {results.map((item, index) => {
                            const value = `${item.latitude},${item.longitude}`
                            return <option key={index} value={value}>{item?.name} {item.country}</option>
                        })}
                    </select>
                    <input className="ml-2" type="submit" value="get Data" />
                </form>
            </section>
            {selected && <Graph data={selected} />}
        </>
    )
}
