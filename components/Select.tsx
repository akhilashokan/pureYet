import { useActionState } from "react";
import { getPolutionData } from "../app/actions";
import Result from "./Result";

export default function Select({ state }) {
    const [selected, formAction] = useActionState(getPolutionData, null)

    if (!state) return null;
    const results = state?.results || [];
    if (results?.length === 0) return <>no city found.</>

    return (
        <>
            <section className="border p-2 flex gap-2 rounded-lg justify-center">
                <p> please select your city</p>
                <form action={formAction} className="flex  justify-center">
                    <select name="selectedCity" className="dark:bg-slate-500 outline-none rounded-l-lg h-full focus:rounded-b-none px-2">
                        {results.map((item, index) => {
                            const value = `${item.latitude},${item.longitude}`
                            return <option key={index} value={value}>{item?.name} {item.country}</option>
                        })}
                    </select>
                    <input className="px-2 dark:bg-slate-400 rounded-r-lg" type="submit" value="get Data" />
                </form>
            </section>
            {selected && <Result data={selected} />}
        </>
    )
}
