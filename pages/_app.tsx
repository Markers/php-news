import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "tippy.js/dist/tippy.css";

import Analytics from "../components/analytics";

function MyApp({
                 Component, pageProps: {
    session, ...pageProps
  },
               }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="system">
        {/* <Analytics /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
