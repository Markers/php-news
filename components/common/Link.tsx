import Link from 'next/link';
import React from 'react';
import { HiExternalLink } from 'react-icons/hi';

interface Props {
  href: string;
  children: React.ReactNode;
  rst: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
}

const CustomLink = ({ href, children, ...rest }: Props) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    );
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
      <span>
        <HiExternalLink className="relative inline-block w-4 h-4 ml-1 align-middle top-[-1px]" />
      </span>
    </a>
  );
};

export default CustomLink;
