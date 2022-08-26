import React from "react";
import Footer from "../components/footer/footer";
import Form from "../components/form";
export default function App() {
    return <main>
        <header className="header">
            <h1>is your city pure<strong>Yet</strong>? </h1>
            <p>select your city</p>
        </header>
        <section>
            <div className="_form">
                <Form />
            </div>
        </section>
        <Footer />
    </main>
}