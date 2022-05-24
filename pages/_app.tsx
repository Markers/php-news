import "../styles/globals.css";

import { ThemeProvider } from "../src/context/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
