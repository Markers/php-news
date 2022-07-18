import Link from 'next/link';
import React from 'react';
import { HiExternalLink } from 'react-icons/hi';

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  rest?: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
}

const CustomLink = ({ className, href, children, onClick }: Props) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className={className} onClick={onClick}>
          {children}
        </a>
      </Link>
    );
  }

  if (isAnchorLink) {
    return (
      <a href={href} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} onClick={onClick}>
      {children}
      <span>
        <HiExternalLink className="relative inline-block w-4 h-4 ml-1 align-middle top-[-1px]" />
      </span>
    </a>
  );
};

export default CustomLink;
