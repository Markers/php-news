import styled from "styled-components";
import { useRequest } from "../../utils/use-request";
import Loading from "../common/loading";

import Footer from "./footer";
import Navbar from "./navbar";

interface Props {
  children: JSX.Element;
}
const MainWrapper = styled.main`
  margin: auto;
  max-width: 1200px;
  width: 100%;

  @media (max-width: ${(props) => props.theme.display.medium}) {
    max-width: 100%;
    width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: ${(props) => props.theme.display.small}) {
    padding: 0;
  }
`;
export default function Layout({ children }: Props) {
  const { data } = useRequest("/articles");
  const category = data?.item.split(/[\s,]+/);

  if (!category) {
    return <Loading />;
  }

  return (
    <>
      <Navbar category={category} />
      <MainWrapper>{children}</MainWrapper>
      <Footer category={category} />
    </>
  );
}
