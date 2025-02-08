export default function Footer() {
    let date = new Date().getFullYear()
    return (
        <footer className="text-center flex flex-wrap justify-center pb-2 gap-1 text-sm">
            <p className="flex gap-1">
                <span title={'Copyright 2022 - ' + date}>&copy;</span>
                Made by Akhil Ashokan
                <a className="flex" href="https://github.com/akhilashokan/pureYet" rel="noreferrer" target={"_blank"} title="link to github repo">
                    <svg className="fill-[--foreground]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={10}>
                        <path d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30 2 0 2-1 2-2v-5c-7 2-10-2-11-5 0 0 0-1-2-3-1-1-5-3-1-3 3 0 5 4 5 4 3 4 7 3 9 2 0-2 2-4 2-4-8-1-14-4-14-15 0-4 1-7 3-9 0 0-2-4 0-9 0 0 5 0 9 4 3-2 13-2 16 0 4-4 9-4 9-4 2 7 0 9 0 9 2 2 3 5 3 9 0 11-7 14-14 15 1 1 2 3 2 6v8c0 1 0 2 2 2 3 0 22-9 22-30C64 14 50 0 32 0Z" />
                    </svg>
                </a>
            </p>
            <p>api from <a className="dark:text-blue-500" referrerPolicy="no-referrer" href="https://open-meteo.com/">Open-Meteo</a></p>
            <p>data by <a className="dark:text-blue-500" referrerPolicy="no-referrer" href="https://confluence.ecmwf.int/display/CKB/CAMS+Regional%3A+European+air+quality+analysis+and+forecast+data+documentation#CAMSRegional:Europeanairqualityanalysisandforecastdatadocumentation-Howtoacknowledge,citeandrefertothedata"> CAMS ENSEMBLE</a></p>
        </footer>
    )
}