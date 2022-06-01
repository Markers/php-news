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
    url: "/early-access-program",
    title: "얼리 액세스 프로그램",
  },
];

const Menu = () => {
  return (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li tabIndex={0}>
        <a className="justify-between">
          Jetbrans
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        <ul className="p-2">
          {mneus.map((item) => {
            return (
              <li key={item.id}>
                <Link href={item.url}>
                  <a>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li>
        <a>모던 PHP 유저 그룹</a>
      </li>
    </>
  );
};

export default Menu;
