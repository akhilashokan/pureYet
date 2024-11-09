'use client'
import { useActionState } from "react";
import Footer from "../components/footer";
import getcity from "./actions";
import Search from "../components/Search";
import Select from "../components/Select";

const initialState = {
    city: '',
}
export default function Home() {
    const [state, formAction] = useActionState(getcity, initialState)
    const stateSelected = state.city !== '';
    return (
        <main className="flex flex-col min-h-screen justify-center align-middle min-w-full">
            <p className="fixed top-0 right-0 text-2xl">WIP</p>
            <div className="m-auto">
                <header className="mb-2">
                    <h1 className="text-7xl text-center">is your city pure<strong>Yet</strong>? </h1>
                </header>
                <Search formAction={formAction} />
                {stateSelected && <Select state={state} />}
            </div>
            <Footer />
        </main>
    );
}
