import { GetStaticProps } from "next";
export default function Page() {
  return (
    <>
      <span>튜토리얼</span>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};
