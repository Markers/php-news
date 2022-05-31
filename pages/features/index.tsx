import { GetStaticProps } from "next";
export default function Page() {
  return (
    <>
      <span>피처</span>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};
