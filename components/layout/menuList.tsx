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

const menuList = () => {
  return (
    <div className="w-full hidden lg:flex justify-between items-center">
      <ul className="flex space-x-4">
        {mneus.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.url}>
                <a className="flex items-center justify-center h-full font-medium hover:text-orange-500 transition-colors">
                  {item.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default menuList;
