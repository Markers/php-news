import SectionSubscribe from "pagesComponents/Sections/SectionSubscribe";
import { socialList } from "../../utils/social";
import { Typography } from "../../src";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-6 text-[#1A237E] bg-grey-100 relative z-50">
      <SectionSubscribe />
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 px-4">
            <div className="mt-12">
              {socialList.map((element) => {
                return (
                  <a href={element.href} target="_blank" rel="noreferrer" key={element.id}>
                    <i className={element.icon} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="my-6 border-grey-300" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <a
            href="https://vercel.com/?utm_source=ct-tailwind-team&utm_campaign=oss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center no-underline text-dark font-semibold"
          >
            <span className="mr-1">Sponsored by</span>
            <span>
              <svg height="20" viewBox="0 0 283 64" fill="none">
                <path
                  fill="currentColor"
                  d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                ></path>
              </svg>
            </span>
          </a>
          <div className="w-full md:w-4/12  px-4 md:px-0 text-center md:text-right">
            <div className="text-sm font-medium py-1">
              Copyright &copy; {year} Material Tailwind by{" "}
              <a
                href="https://www.creative-tim.com?ref=material-tailwind"
                target="_blank"
                rel="noreferrer"
                className="text-inherit transition-all"
              >
                Creative Tim.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
