import style from "./footer.module.scss"
export default function Footer() {
    let date = new Date().getFullYear()
    return (
        <footer className={style.footer}>
            <p title={'Copyright 2022 - ' + date}>&copy;</p>
            <p>Made with &hearts; by Akhil Ashokan &nbsp;</p>
            <a href="https://github.com/akhilashokan/pureYet" rel="noreferrer" target={"_blank"} title="link to github repo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={style.githubLink} width={10}>
                    <path d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30 2 0 2-1 2-2v-5c-7 2-10-2-11-5 0 0 0-1-2-3-1-1-5-3-1-3 3 0 5 4 5 4 3 4 7 3 9 2 0-2 2-4 2-4-8-1-14-4-14-15 0-4 1-7 3-9 0 0-2-4 0-9 0 0 5 0 9 4 3-2 13-2 16 0 4-4 9-4 9-4 2 7 0 9 0 9 2 2 3 5 3 9 0 11-7 14-14 15 1 1 2 3 2 6v8c0 1 0 2 2 2 3 0 22-9 22-30C64 14 50 0 32 0Z" />
                </svg>
            </a>
        </footer>
    )
}