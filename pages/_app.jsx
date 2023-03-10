import { useState } from "react";
import Head from "next/head";

import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [query, setQuery] = useState("");

  return (
    <>
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header setQuery={setQuery} query={query} />
        <Component {...pageProps} setQuery={setQuery} query={query} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
