import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-14 p-4 max-w-[1200px] mx-auto h-full min-w-[320px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
