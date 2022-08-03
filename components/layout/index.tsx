import styled from "styled-components";
import { useRequest } from "../../utils/use-request";

import Footer from "./footer";
import Navbar from "./navbar";

interface Props {
  children: JSX.Element;
}
const MainWrapper = styled.main`
  margin: auto;
  max-width: 1200px;
  width: 100%;
`;
export default function Layout({ children }: Props) {
  const { data } = useRequest("/articles");
  const category = data?.item.split(",");

  return (
    <>
      <Navbar category={category} />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
}
