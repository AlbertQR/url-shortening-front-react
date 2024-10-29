import React from 'react';

interface Props {
  href: string;
}

export const GetStartedButton: React.FC<Props> = ({ href }) => {
  return (
    <a
      href={href}
      className="btn py-3 text-xl mt-7 font-medium px-10 bg-cyan rounded-full"
    >
      Get Started
    </a>
  );
};