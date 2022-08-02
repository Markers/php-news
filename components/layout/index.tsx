import { useRequest } from "../../utils/use-request";

import Footer from "./footer";
import Navbar from "./navbar";

interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props) {
  const { data } = useRequest("/articles");
  const category = data.item.split(",");

  return (
    <>
      <Navbar category={category} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
