import { mordenPugList, MordenPugListProps } from "../../../utils/site";
import Link from "next/link";
import styled from "styled-components";
import { Category } from "types/category";

const FooterWrapper = styled.footer`
  padding-top: 150px;
  width: 100%;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 2fr 2fr 1fr;
`;

interface Props {
  category: Category[];
}

export default function Footer({ category }: Props) {
  return (
    <FooterWrapper>
      <div>
        <h3>PHP NEWS</h3>
        <div className="brans">
          {category.map((element) => (
            <p key={element}>
              <Link href={`/articles/${element}`}>
                <a>{element}</a>
              </Link>
            </p>
          ))}
        </div>
      </div>
      <div className="pug">
        <h3>모던 PHP 유저 그룹</h3>
        <div className="pug">
          {mordenPugList.map((element: MordenPugListProps) => (
            <p key={element.name}>
              <Link href={`/articles/${element.name}`}>
                <a>{element.name}</a>
              </Link>
            </p>
          ))}
        </div>
      </div>
      <div>
        <h3>구독</h3>
        <form action="" className="subscribe">
          <input type="text" placeholder="이메일을 입력하세요" />
          <button type="submit">구독</button>
        </form>
      </div>
    </FooterWrapper>
  );
}
