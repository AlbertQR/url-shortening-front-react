import { useState } from 'react';
import './Shorten.css';

export const Shorten = () => {
  const [isValidLink, setIsValidLink] = useState(true);

  return (
    <section
      className="section relative z-0 bg-white pt-16 after:empty-content
        after:absolute after:left-0 after:bottom-0 after:bg-[#f0f1f6] after:z-10
        after:w-full after:h-calc-50-minus-2rem">

      <div
        className="container relative p-6 md:p-14 z-40 bg-darkViolet rounded-lg
          bg-shorten-image-mobile md:bg-shorten-image-desktop bg-no-repeat bg-cover">

        <form
          onSubmit={e => e.preventDefault()}
          className={!isValidLink ? 'error' : ''}>
          <div className="flex flex-col md:flex-row w-full lg:w-auto gap-4 md:gap-6">
            <div className="flex flex-col w-full relative">
              <input
                className="rounded md:rounded-lg outline-0 px-2.5 md:px-6 py-5 md:flex-1"
                type="text"
                placeholder="Shorten a link here..."
                style={{
                  outline: !isValidLink ? '3px solid hsl(0, 87%, 67%)' : 'none',
                }}
              />
              <span
                className="text-red italic mt-2 inline-block lg:absolute -bottom-8"
                style={{
                  display: !isValidLink ? 'inline-block' : 'none'
                }}
              >Please add a link</span>
            </div>

            <button
              className="btn max-h-fit leading-none rounded md:rounded-lg text-center
                px-10 py-5 text-[1.4rem] min-w-[195px] font-medium hover:scale-105
                transition duration-300 ease-in-out"
              onClick={() => setIsValidLink(!isValidLink)}>
              Shorten It!
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};