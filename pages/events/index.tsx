import { GetStaticProps } from "next";
export default function Page() {
  return (
    <>
      <span>이벤트</span>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};
