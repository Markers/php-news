import Link from "next/link";

const mneus = [
  {
    id: "1",
    url: "/news",
    title: "뉴스",
  },
  {
    id: "2",
    url: "/tutorials",
    title: "튜토리얼",
  },
  {
    id: "3",
    url: "/videos",
    title: "비디오",
  },
  {
    id: "4",
    url: "/php-annotated-monthly",
    title: "PHP Annotated Monthly",
  },
  {
    id: "5",
    url: "/features",
    title: "Features",
  },
  {
    id: "6",
    url: "/events",
    title: "이벤트",
  },
  {
    id: "7",
    url: "/eap",
    title: "얼리 액세스 프로그램",
  },
  {
    id: "8",
    url: "https://modernpug.org/",
    title: "모던 PHP 유저 그룹",
  },
];

const Menu = () => {
  return (
    <>
      {mneus.map((item, index) => {
        return (
          <li key={item.id} tabIndex={index}>
            <Link href={item.url}>
              <a>{item.title}</a>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Menu;
