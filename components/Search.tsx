import { useSearchParams } from "next/navigation";

export default function Search({ formAction }) {
    let defaultCity = ''
    const searchParams = useSearchParams();
    const cityIsInUrl = searchParams.has('city');
    if (cityIsInUrl) defaultCity = searchParams.get('city')!;


    return (
        <section className="my-4 p-6 block border rounded-lg shadow">
            <p className="text-center">Search your city</p>
            <form action={formAction} className="flex  justify-center mt-1">
                <input className="px-2 bg-slate-200 dark:bg-slate-500 p-x2 rounded-lg outline-none rounded-r-none" type="text" defaultValue={defaultCity} minLength={4} name="city" id="city" />
                <input className="bg-slate-400 px-2 rounded-r-lg" type="submit" value="Search" />
            </form>
        </section>
    )
}
