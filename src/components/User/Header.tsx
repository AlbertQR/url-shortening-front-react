import illustration from '../../assets/images/illustration-working.svg';
import { GetStartedButton } from './GetStartedButton.tsx';

export const Header = () => {
  return (
    <section className="container relative flex flex-col-reverse
      items-center justify-center md:flex-row">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-7xl font-bold
          text-veryDarkBlue md:leading-[1.15]"
        >
          More than just shorter links
        </h1>
        <p className="text-grayishViolet mt-4 md:mt-1 text-lg
          md:text-[1.35rem] md:max-w-[70%] md:leading-[1.75]">
          Build your brand’s recognition and get detailed insights
          on how your links are performing.
        </p>
        <GetStartedButton href="#"/>
      </div>
      <img className="relative -mr-5 md:-mr-72 md:h-[520px]" src={illustration}
           alt="illustration working"/>
    </section>
  );
}