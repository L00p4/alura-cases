import GlobalStyle from "../src/componentes/Link/theme/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
    return (
        // <> é um  <ReactFragment></ReactFragment> abreviado
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

