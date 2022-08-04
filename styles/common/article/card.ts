import styled from "styled-components";

interface LabelProps {
  color: string;
}

export const Label = styled.span<LabelProps>`
  -webkit-box-align: center;
  align-items: center;
  border-radius: 10px;
  display: inline-flex;
  padding: 0px 10px;
  font-size: 14px;
  height: 30px;
  background-color: ${(props) => props.color + 62};

  div {
    background-color: ${(props) => props.color};
    border-radius: 50%;
    margin-inline-end: 5px;
    height: 10px;
    width: 10px;
  }
`;

export const Card = styled.div`
  display: flex;

  .card-image {
    margin-bottom: 10px;
    padding-top: 60%;
    background-position: center center;
    background-size: cover;
    border-radius: 20px;
  }

  .card-title {
    /* Font Style */
    line-height: 28px;

    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    /* Title Grid */
    margin: 0px 5px 10px;
    color: #14151a;
    height: 80px;
  }

  .card-descrition {
    span {
      text-overflow: ellipsis;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      color: ${(props) => props.theme.colors.gray};
    }

    line-height: 1.45;
    margin: 0px 5px 10px;
  }

  .card-outer {
    -webkit-box-align: center;
    align-items: center;
    display: inline-flex;
    margin: 0px 5px 10px;
    width: 100%;
    span {
      margin: 0px 5px;
    }
    span:last-child {
      margin-left: auto;
      padding-right: 20px;
    }

    .readme {
      -webkit-box-align: center;
      align-items: center;
      display: inline-flex;
    }
  }
`;
