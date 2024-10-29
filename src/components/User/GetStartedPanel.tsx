import { GetStartedButton } from './GetStartedButton.tsx';

export const GetStartedPanel = () => {
  return (
    <section className="bg-darkViolet text-center bg-no-repeat bg-cover px-6 py-24
      bg-boost-image-mobile md:bg-boost-image-desktop">
      <h3 className="text-[1.65rem] md:text-[2.35rem] text-white font-bold">
        Boost your links today
      </h3>
      <GetStartedButton href="#"/>
    </section>
  );
}