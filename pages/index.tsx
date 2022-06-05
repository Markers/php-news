import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <section className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            width={800}
            height={800}
            src="/images/example_1.JPG"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="example 이미지"
          />
          <div>
            <h1 className="text-5xl font-bold">PHP 번역 문서</h1>
            <p className="py-6">
              모던 PHP 유저 그룹에서 열심히 관리할 예정임. Jetbrains 에 올라오는 PHP 포스팅 번역본
              그 외 토론 공간을 만들 예정임. 모던 PHP 유저 그룹이 궁금하면 아래로 오셈
            </p>
            <p>아이콘들 여기에 좌라락</p>
          </div>
        </div>
      </section>
      <section className="bg-base-100">
        <div>
          <h2>최신글 관련</h2>
        </div>
        <div>
          <span>카드</span>
        </div>
      </section>
      <section className="bg-base-100">
        <div>
          <h2>커뮤니티 공간</h2>
        </div>
        <span>카드</span>
      </section>
    </>
  );
};

export default Home;
