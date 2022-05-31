import { GetStaticProps } from "next";
export default function Page() {
  return (
    <>
      <span>비디오</span>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {},
  };
};
