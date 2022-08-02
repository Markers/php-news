import { Categoris, Category } from "../../types/category";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`;

interface Props {
  category: Category[];
}
export default function Navbar({ category }: Props) {
  return (
    <NavbarWrapper>
      <span>asd</span>
    </NavbarWrapper>
  );
}
