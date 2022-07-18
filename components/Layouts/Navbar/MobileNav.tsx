import { motion } from 'framer-motion';
import { CgClose } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import { NavLinks } from './NavLinks';
import React from 'react';
import CustomLink from '../../common/Link';

interface Props {
  navShow: boolean;
  setNavShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileNav = ({ navShow, setNavShow }: Props) => {
  const onToggleNav = () => {
    setNavShow((status: boolean) => {
      if (status) {
        document.body.style.overflow = '';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };

  return (
    <>
      <motion.button
        onClick={onToggleNav}
        className="flex items-center justify-center p-0 ml-1 text-lg bg-transparent h-11 w-11 sm:ml-4 sm:hidden"
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 0.7,
          rotate: 360,
          transition: { duration: 0.2 },
        }}
        aria-label="Toggle Navbar"
        type="button"
      >
        {navShow ? <CgClose size={20} /> : <GiHamburgerMenu size={20} />}
      </motion.button>
      {navShow && (
        <motion.nav
          className="fixed bottom-0 left-0 right-0 z-50 visible block w-full h-full px-6 pb-6 overflow-hidden overflow-y-scroll top-[60px] max-w-[100vw] bg-body dark:bg-body-dark sm:hidden"
          animate={{ x: 0 }}
          initial={{ x: '100vw' }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="flex flex-row px-2 py-4 divide-x divide-border-primary dark:divide-border-primary-dark">
            <div className="w-full text-center">
              <a
                href="https://github.com/kyungseo-park"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FaGithub size={20} className="mr-1" />
                Github
              </a>
            </div>
          </div>
          {NavLinks.map((link) => (
            <div key={link.title} className="border-b border-border-primary dark:border-border-primary-dark">
              <CustomLink
                href={link.href}
                className="block px-2 py-4 text-base font-bold tracking-widest transition-colors duration-200 hover:bg-body-secondary hover:dark:bg-body-secondary-dark"
                onClick={onToggleNav}
              >
                {link.title}
              </CustomLink>
            </div>
          ))}
        </motion.nav>
      )}
    </>
  );
};
