import React from "react";
import Form from "../components/form";
export default function App() {
    return <main>
        <header>
            <h1>is your city pure<strong>Yet</strong>? </h1>
            <p>select your city</p>
        </header>
        <section>
            <div className="_form">
                <Form />
            </div>
        </section>
    </main>
}