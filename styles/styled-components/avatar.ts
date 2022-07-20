import Image from 'next/image';
import styled from 'styled-components';

export const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
