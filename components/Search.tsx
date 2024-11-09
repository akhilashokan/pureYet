export default function Search({ formAction }) {
    return (
        <section className="my-4 p-6 block border rounded-lg shadow">
            <p className="text-center">Search your city</p>
            <form action={formAction} className="flex gap-2 justify-center mt-1">
                <input className="bg-slate-500" type="text" minLength={4} name="city" id="city" />
                <input type="submit" value="Search" />
            </form>
        </section>
    )
}
