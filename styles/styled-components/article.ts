import styled from 'styled-components';

export const CardTitle = styled.h1`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  margin-top: 10px;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

export const CardDescription = styled.div`
  padding: 10px;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  font-weight: 300;
  margin-bottom: 20px;

  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 80px;
`;

export const CardTagsItem = styled.div`
  padding: 5px;
  span {
    margin: 0 5px;
    padding: 5px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-overflow: ellipsis;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #f5f5f5;
    }
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }
`;
