import styled from "styled-components";
export const TestLayout = styled.div`
  max-width: 800px;
  margin: auto;
`;
export const MardkownHeader = styled.div``;

export const Markdown = styled.article`
  h1 {
    font-size: 1.8rem;
  }
  p {
    font-size: 1.4rem;
  }
  > ul > li:before {
    content: counter(item);
    display: inline-block;
    height: 20px;
    margin-right: 5px;
    border: 1px solid #000;
    color: #000;
    font-size: 20px;
    padding: 0 8px 8px;
    border-radius: 3px;
    line-height: 1.3;
  }
  > ul {
    line-height: 2;
    > li {
      list-style-type: none;
      counter-increment: item;

      blockquote {
        margin: auto;
        padding: 0px;
        a {
          padding: 0px;
        }
        p {
          font-size: 16px;
        }
      }

      ul li {
        list-style-type: upper-roman;
        counter-increment: none;
      }

      ul li:before {
        /* content: counter(item2); */
      }
    }
  }

  img {
    width: 100%;
  }
  a {
    text-decoration: underline;
    color: #868686;
  }

  /* visited link */
  /* mouse over link */
  a:hover {
    color: #060606;
  }

  /* selected link */
  a:active {
    color: #000;
  }
`;
