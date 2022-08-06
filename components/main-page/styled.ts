import styled from "styled-components";

export const MainPageWrapper = styled.div`
  a {
    -webkit-transition: box-shadow 250ms ease-in;
    transition: box-shadow 250ms ease-in;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 7px 14px rgb(71 77 87 / 8%), 0px 3px 6px rgb(20 21 26 / 8%);

    /* a 태그 CSS 없애기 */
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    box-shadow: 0px 0px 1px rgb(20 21 26 / 10%),
      0px 16px 32px rgb(71 77 87 / 16%), 0px 8px 16px rgb(20 21 26 / 16%);
  }

  .articles {
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    grid-gap: 25px;
  }

  @media (max-width: ${(props) => props.theme.display.medium}) {
    .articles {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${(props) => props.theme.display.small}) {
    .articles {
      grid-template-columns: 1fr;
    }
  }
`;
