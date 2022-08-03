import useWindowSize from "@/hooks/useWindowSize";
import { useIsMobile } from "@/utils/setting";
import Image from "next/image";
import styled from "styled-components";

interface LoadingWrapperProps {
  isMobile: boolean;
  height: number | undefined;
}

const LoadingWrapper = styled.div<LoadingWrapperProps>`
  text-align: center;
  margin: auto;
  /* Header와 Footer의 높이를 뺌 */
  height: calc(${(props) => props.height}px - 40px - 20px);
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  .img {
    animation: rotate_image 6s linear infinite;
    transform-origin: 50% 50%;
  }

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loading() {
  const { height } = useWindowSize();
  const isMobile = useIsMobile();
  //  ["fill", "fixed", "intrinsic", "responsive", undefined];
  return (
    <LoadingWrapper isMobile={isMobile} height={height}>
      <Image
        layout="fixed"
        width={isMobile ? 120 : 500}
        height={isMobile ? 120 : 500}
        className="img"
        src="https://modernpug.org/img/logo/logo_03.svg"
        alt="Loading..."
      />
    </LoadingWrapper>
  );
}
