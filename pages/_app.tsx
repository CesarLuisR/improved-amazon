import "../styles/globals.css";
import type { AppProps } from "next/app";
import StoreProvider from "../app/store";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Amazon</title>
        <link
          rel="shortcut icon"
          href="../public/favicon.jpg"
          type="image/x-icon"
        />
      </Head>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}
export default MyApp;
