import Head from 'next/head'
import './style.scss'
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>pureYet?</title>
                <link rel="icon" href="https://raw.githubusercontent.com/akhilashokan/akhilashokan.github.io/react/public/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )

}