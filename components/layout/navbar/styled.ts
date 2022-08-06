import styled from "styled-components";

export const NavbarWrapper = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  .logo {
    text-align: center;
  }
  .manu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .manu-logo {
      font-size: 24px;
    }

    .manu-list {
      margin: auto 0px;

      li {
        list-style: none;
        text-align: center;
        float: left;
      }
      li a {
        text-transform: uppercase;
        text-decoration: none;
        display: block;
        margin: 0px 10px;
        font-size: 16px;
      }
      li a:hover {
        color: ${(props) => props.theme.colors.gray};
      }
    }
  }
`;
