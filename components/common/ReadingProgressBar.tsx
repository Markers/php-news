import React from 'react';

export default function ReadingProgressBar() {
  const [width, setWidth] = React.useState(0);

  const scrollHeight = () => {
    const el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    const percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;

    setWidth(percent);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', scrollHeight);
    return () => window.removeEventListener('scroll', scrollHeight);
  });

  return <div className="fixed z-50 bg-red-500 top-[60px] h-[6px]" style={{ width: width + '%' }}></div>;
}
