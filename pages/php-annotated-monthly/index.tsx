import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";
import { Article } from "types/article";

interface Props {
  data: Article[];
}
export default function Page({ data }: Props) {
  console.log(data);

  return (
    <>
      <section>
        <div className="md:container md:mx-auto">
          <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-purple-800">
            PHP Annotated Monthly
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg" key={item.id}>
              <Image
                className="w-full"
                width={item.thubnamil.width}
                height={item.thubnamil.height}
                src={item.thubnamil.src}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://127.0.0.1:8000/api/v1/php-annotated-monthly`);
  const data = await res.json();
  return { props: data };
};
