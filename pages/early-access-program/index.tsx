import { GetStaticProps } from "next";
export default function Page() {
  return (
    <>
      <span>얼리 액세스 프로그램</span>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};