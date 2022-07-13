import { useRouter } from 'next/router';
import React from 'react';

import Link from '../../common/Link';
import ThemeSwitch from '../../common/ThemeSwitch';
import { Tooltip } from '../../common/Tooltip';

import { MobileNav } from './MobileNav';
import { NavLinks } from './NavLinks';
import ReadingProgressBar from '../../common/ReadingProgressBar';
import useIsScrollTop from '@hooks/useIsScrollTop';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      className={`hidden rounded-lg py-1 px-2 font-medium transition-all sm:inline-block sm:py-3 md:px-4 ${
        isActive ? 'text-brand' : 'text-typeface-primary dark:text-typeface-primary-dark'
      }`}
      href={href}
    >
      <span className="relative">
        {text}
        {isActive && <div className="absolute w-full h-1 mt-2 top-full rounded-2xl bg-brand opacity-80" />}
      </span>
    </Link>
  );
}

export const Navbar = () => {
  const isTop = useIsScrollTop();
  const [navShow, setNavShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const isBlog = useRouter().asPath.includes('/blog/');

  return (
    <>
      {open && (
        <div
          onClick={() => {
            setOpen(false);
          }}
          aria-hidden="true"
          className="fixed inset-0 z-40 w-full h-full"
        ></div>
      )}
      <header
        className={`
          "sticky top-0 z-40 w-full flex-none lg:z-50",
          ${
            isTop
              ? 'dark:bg-transparent'
              : navShow
              ? 'bg-body dark:bg-body-dark'
              : 'bg-body/75  backdrop-blur dark:bg-body-dark-75 '
          },
        `}
      >
        <div className="relative flex items-center justify-between max-w-5xl px-4 py-2 mx-auto divide-x divide-border-primary dark:divide-border-primary-dark xl:px-0">
          <div className="flex items-center text-sm font-medium">
            <div className="sm:hidden">
              <Tooltip content="Home">
                <div>
                  <Link href="/" aria-label="PHP NEWS">
                    <span>모던 PHP 유저 그룹</span>
                    {/*<Logo className="mx-4 fill-brand" size={30} />*/}
                  </Link>
                </div>
              </Tooltip>
            </div>
            <div className="hidden sm:block">
              {NavLinks.map((link, index) => (
                <NavItem key={index} href={link.href} text={link.title} />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <ThemeSwitch />
            <MobileNav navShow={navShow} setNavShow={setNavShow} />
          </div>
        </div>
      </header>
      {isBlog && <ReadingProgressBar />}
    </>
  );
};
