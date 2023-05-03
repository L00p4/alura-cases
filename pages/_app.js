import GlobalStyle from "../src/theme/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
    return (
        // <> é um  <ReactFragment></ReactFragment> abreviado
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

