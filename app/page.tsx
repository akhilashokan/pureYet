'use client'
import { useActionState } from "react";
import getcity from "./actions";
import Search from "../components/Search";
import Select from "../components/Select";

export default function Home() {
    const [state, formAction] = useActionState(getcity, null)
    const stateSelected = state?.city !== '';

    return (
        <main className="flex flex-1 pt-2">
            <p className="fixed top-0 right-0 text-2xl">WIP</p>
            <div className="m-auto max-w-[95%]">

                <header className="mb-2">
                    <h1 className="text-7xl text-center">is your city pure<strong>Yet</strong>? </h1>
                </header>
                <Search formAction={formAction} />
                {stateSelected && <Select state={state} />}
            </div>
        </main>
    );
}
