import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./header";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
