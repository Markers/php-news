import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
import axios from "axios";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <SWRConfig
        value={{
          fetcher: (url: string) => axios.get(url).then((res) => res.data),
        }}
      >
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </SWRConfig>
    </ThemeProvider>
  );
}
