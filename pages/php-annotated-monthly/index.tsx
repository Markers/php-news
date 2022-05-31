import { GetStaticProps } from "next";
export default function Page() {
  return (
    <>
      <span>PHP Annotated Monthly</span>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};
