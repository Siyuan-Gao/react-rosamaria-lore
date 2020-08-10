import Head from "next/head";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";

const theme = {
    colors: {
        primary: "#0070f3",
    },
};

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <script
                    src="https://kit.fontawesome.com/76085f5206.js"
                    crossorigin="anonymous"
                ></script>
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
