import { GetStaticProps } from "next";
export default function Page() {
  return (
    <>
      <span>뉴스</span>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};
