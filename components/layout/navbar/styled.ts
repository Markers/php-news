import styled from "styled-components";

export const NavbarWrapper = styled.header`
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

interface NavbarMobilWrapperProps {
  open: boolean;
}

export const NavbarMobilWrapper = styled.header<NavbarMobilWrapperProps>`
  height: 100px;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  .navbar {
    text-align: left;

    .navbar-button {
      position: absolute;
      left: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 2rem;
      height: 2rem;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 10;
    }
    .navbar-iem {
      width: 2rem;
      height: 0.25rem;
      background: ${({ theme, open }) =>
        open ? theme.colors.black : theme.colors.gray};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }

  .nav-menu {
    /* 여기에 백그라운드가 있으면 안되는데 */
    background: ${({ theme }) => theme.colors.white};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    position: absolute;
    top: 200px;
    width: 100%;
    height: 100vh;
    padding: 2rem;

    /* 상단 고정 */
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    a {
      font-size: 14px;
      letter-spacing: 4px;
      transition: color 0.3s linear;

      &:hover {
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  .logo {
    text-align: center;
  }

  .github {
    text-align: right;
  }
`;
