import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
import axios from "axios";
import type { AppProps } from "next/app";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => axios.get(url).then((res) => res.data),
      }}
    >
      {getLayout(<Component {...pageProps} />)}
    </SWRConfig>
  );
}
