import { useRouter } from 'next/router';
import React from 'react';
import { FooterLink } from '@components/Layouts/Footer/FooterLink';
import CustomLink from '../../common/Link';

export default function Footer() {
  const { locale, defaultLocale } = useRouter();

  return (
    <footer className="w-full max-w-5xl px-8 mx-auto mt-8 xl:px-0">
      <div className="flex flex-row flex-wrap pt-12 mx-auto mt-6 border-t gap-1 border-border-primary dark:border-border-primary-dark">
        <div className="w-full pb-16 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {FooterLink.middleLinks.map((item, index) => (
            <div key={index} className="flex flex-col items-start pr-4 mb-10 gap-y-4">
              {item.list.map((item, index) => (
                <CustomLink
                  className="border-b-2 border-transparent duration-300 hover:border-brand"
                  key={index}
                  href={
                    item.href === '/feed.xml' ? `/feed${locale === defaultLocale ? '' : `.${locale}`}.xml` : item.href
                  }
                >
                  {item.title}
                </CustomLink>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mx-auto mb-8 font-medium">© {new Date().getFullYear()} PHP NEWS</div>
    </footer>
  );
}
