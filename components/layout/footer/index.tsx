import { mordenPugList, MordenPugListProps } from "../../../utils/site";
import Link from "next/link";
import styled from "styled-components";
import { Category } from "types/category";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";

const FooterWrapper = styled.footer`
  padding-top: 150px;
  width: 100%;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 2fr 2fr 1fr;

  /* 구독하기 */
  .subscribe {
    h3 {
      border-left: 5px solid dodgerblue;
      padding-left: 10px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, cursive;
    }
  }
`;

interface Props {
  category: Category[];
}

export default function Footer({ category }: Props) {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(email);
  };

  return (
    <FooterWrapper>
      <div className="jetbrains-blog">
        <h3>PHP NEWS</h3>
        <div>
          {category.map((element) => (
            <p key={element}>
              <Link href={`/${element}`}>
                <a>{element}</a>
              </Link>
            </p>
          ))}
        </div>
      </div>
      <div className="morden-php-user-group">
        <h3>모던 PHP 유저 그룹</h3>
        <div>
          {mordenPugList.map((element: MordenPugListProps) => (
            <p key={element.name}>
              <Link href={`/articles/${element.name}`}>
                <a>{element.name}</a>
              </Link>
            </p>
          ))}
        </div>
      </div>
      <div className="subscribe">
        <h3>구독</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Email :
            <input
              type="text"
              name="email"
              value={email || ""}
              onChange={(event) => setEmail(event.target.name)}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    </FooterWrapper>
  );
}
