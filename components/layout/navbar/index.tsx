import { useIsMobile } from "@/utils/setting";
import Link from "next/link";
import { Category } from "../../../types/category";
import { NavbarMobilWrapper, NavbarWrapper } from "./styled";
import Github from "../../../assets/images/github.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { pathManager } from "@/utils/route/router-manager";

interface Props {
  category: Category[];
}

export default function Navbar({ category }: Props) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const { asPath } = useRouter();

  // Mobile => PC 전환 navbar 닫음
  useEffect(() => {
    if (isMobile === false) {
      setOpen(false);
    }
  }, [isMobile]);

  // 페이지 이동 navbar 닫음
  useEffect(() => {
    const { currentPath, prevPath } = pathManager();
    if (currentPath !== prevPath) {
      setOpen(false);
    }
  }, [asPath]);

  if (isMobile) {
    return (
      <NavbarMobilWrapper open={open}>
        <div className="navbar">
          <button
            className="navbar-button"
            aria-label="menu"
            aria-expanded={open ? true : false}
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-iem" />
            <span className="navbar-iem" />
            <span className="navbar-iem" />
          </button>

          <nav aria-hidden={!open} className="nav-menu">
            {category.map((element) => (
              <div key={element}>
                <Link href={`/${element}`}>
                  <a>{element.replaceAll("-", " ")}</a>
                </Link>
              </div>
            ))}
          </nav>
        </div>
        <span className="logo">PHP NEWS</span>
        <div className="github">
          <Link href="https://github.com/Kyungseo-Park/php-news">
            <a target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </Link>
        </div>
      </NavbarMobilWrapper>
    );
  }

  return (
    <NavbarWrapper>
      <div className="logo">PHP NEWS</div>
      <div className="manu">
        <div className="manu-we"></div>
        <ul className="manu-list">
          {category.map((element) => (
            <li key={element}>
              <Link href={`/${element}`} target="_blank">
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
