import FilterBar from "@components/common/list/FilterBar";
import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";
import { useState } from "react";
import { Article } from "types/article";

interface Props {
  data: Article[];
}
export default function Page({ data }: Props) {
  // TODO: Search/Filter 로 article list를 관리할 예정
  const [article, setArticle] = useState(data);

  return (
    <section key="php-annotated-monthly-list">
      <div className="md:container md:mx-auto">
        <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-purple-800">
          PHP Annotated Monthly
        </h1>
      </div>
      <div className="md:container md:mx-auto">
        <p>디자인 외주 맡길까 고민된다.</p>
        <FilterBar />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg" key={item.id}>
            {item.thubnamil ? (
              <Image
                className="w-full"
                width={item.thubnamil.width}
                height={item.thubnamil.height}
                src={item.thubnamil.src}
                alt="Sunset in the mountains"
              />
            ) : (
              <Image
                className="w-full"
                width="240"
                height="240"
                src="https://avatars.githubusercontent.com/u/45850400?v=4"
                alt="Sunset in the mountains"
              />
            )}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              작성자 : {item.writer}
              <Image className="w-full" height={64} width={64} src={item.writer_url ?? ""} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://php-news-api.kkyungvelyy.com/api/v1/php-annotated-monthly`);
  const data = await res.json();
  return { props: data };
};
