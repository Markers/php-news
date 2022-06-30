import "../styles/globals.scss";
import Layout from "@components/layouts";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Analytics from "@components/analytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
        <Analytics />
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
