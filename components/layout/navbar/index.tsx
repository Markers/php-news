import { useIsMobile } from "@/utils/setting";
import Link from "next/link";
import { Category } from "../../../types/category";
import { NavbarWrapper } from "./styled";
import Github from "../../../assets/images/github.svg";

interface Props {
  category: Category[];
}
export default function Navbar({ category }: Props) {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <></>;
  }

  return (
    <NavbarWrapper>
      <div className="logo">PHP NEWS</div>
      <div className="manu">
        <div className="manu-we"></div>
        <ul className="manu-list">
          {category.map((element) => (
            <li key={element}>
              <Link href={`/articles/${element}`} target="_blank">
                <a>{element.replaceAll("-", " ")}</a>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="https://github.com/Kyungseo-Park/php-news">
          <a target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        </Link>
      </div>
    </NavbarWrapper>
  );
}
