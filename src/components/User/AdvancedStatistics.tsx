import BrandRecognition from '../../assets/images/icon-brand-recognition.svg';
import DetailedRecords from '../../assets/images/icon-detailed-records.svg';
import FullyCustomizable from '../../assets/images/icon-fully-customizable.svg';


export const AdvancedStatistics = () => {
  return (
    <section className="container mt-[95px] mb-[120px] lg:mt-[130px] text-center">
      <h2 className="font-bold text-[1.75rem] lg:text-[2.55rem] text-veryDarkBlue">
        Advanced Statistics
      </h2>
      <p className="text-grayishViolet text-[1.05rem] lg:text-[1.25rem] mt-[1.25rem] max-w-[575px] mx-auto">
        Track how your links are performing across the web with our
        advanced statistics dashboard.
      </p>

      <div className="flex relative flex-col gap-[90px] lg:gap-[30px] lg:flex-row mt-[54px]
        before:empty-content before:h-full before:w-2 before:lg:w-full
        before:lg:h-2 before:absolute before:bg-cyan before:top-0 before:left-1/2
        before:translate-x-1/2 before:lg:top-1/2 before:lg:translate-y-1/2
        before:lg:left-0 before:lg:translate-x-0 lg:text-left">

        <article className="bg-white h-fit flex-1 relative px-[26px] lg:px-[33px] pb-12 rounded-md">
          <div className="flex justify-center items-center w-[88px] h-[88px]
             rounded-full bg-darkViolet -mt-[44px]">
            <img src={BrandRecognition} alt="Brand Recognition"/>
          </div>
          <h3 className="mt-11 font-bold text-2xl lg:text-[1.7rem] text-veryDarkViolet">
            Brand Recognition
          </h3>
          <p className="mt-6 text-grayishViolet text-md leading-7 lg:text-[1.175rem]">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </article>

        <article className="lg:mt-[44px] flex-1 h-fit bg-white relative px-[26px] pb-12 rounded-md">
          <div className="flex justify-center items-center w-[88px] h-[88px]
             rounded-full bg-darkViolet -mt-[44px]">
            <img src={DetailedRecords} alt="Detailed Records"/>
          </div>
          <h3 className="mt-11 font-bold text-2xl text-veryDarkViolet lg:text-[1.7rem]">
            Detailed Records
          </h3>
          <p className="mt-6 text-grayishViolet text- leading-7 lg:text-[1.175rem]">
            Gain insights into who is clicking your links. Knowing when and where
            people engage with your content helps inform better decisions.
          </p>
        </article>

        <article className="lg:mt-[88px] flex-1 h-fit bg-white relative px-[26px] pb-12 rounded-md">
          <div className="flex justify-center items-center w-[88px] h-[88px]
             rounded-full bg-darkViolet -mt-[44px]">
            <img src={FullyCustomizable} alt="Fully Customizable"/>
          </div>
          <h3 className="mt-11 font-bold text-2xl text-veryDarkViolet lg:text-[1.7rem]">
            Fully Customizable
          </h3>
          <p className="mt-6 text-grayishViolet text-md leading-7 lg:text-[1.175rem]">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </article>
      </div>
    </section>
  );
};