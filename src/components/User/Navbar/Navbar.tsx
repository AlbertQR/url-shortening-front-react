import { useRef, useState } from 'react';
import logo from '../../../assets/images/logo.svg';
import './Navbar.css';

export const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const collapse = useRef<HTMLDivElement>(null);

  const handleToggler = () => {
    collapse.current?.classList.toggle('scale-0');
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={isCollapsed ? 'open' : ''}>
      <div className="container ">
        <div className="flex justify-between pt-10 pb-[1.8125rem] relative
          items-center">
          <a href="#"><img src={logo} alt="logo"/></a>

          <button
            onClick={handleToggler}
            className="toggle flex flex-col pt-1.5 gap-1.5 md:hidden
          transition-all outline-0">
            <span className="bg-grayishViolet h-[3px] w-6 transition-all"></span>
            <span className="bg-grayishViolet h-[3px] w-6 transition-all"></span>
            <span className="bg-grayishViolet h-[3px] w-6 transition-all"></span>
          </button>

          <div className="absolute z-40 md:static w-full top-24 md:top-0
          scale-0 md:scale-100" ref={collapse}>
            <div
              className=" bg-darkViolet sm:bg-white transition-transform text-white
              md:text-grayishViolet md:py-0 px-6 md:px-0 md:flex md:justify-between
             rounded-lg overflow-hidden md:items-center"
            >
              <ul className="flex flex-col md:flex-row text-center gap-8 pt-10 md:py-0
              pb-8 border-b md:border-none border-grayishViolet md:ml-11">
                <li className="nav-link">
                  <a href="#">Features</a>
                </li>
                <li className="nav-link">
                  <a href="#">Pricing</a>
                </li>
                <li className="nav-link">
                  <a href="#">Resources</a>
                </li>
              </ul>

              <ul className="flex flex-col md:flex-row
              align-baselinejustify-center text-center
              pt-7 pb-9 md:py-0 gap-7 md:gap-9 md:items-center">
                <li className="nav-link">
                  <a href="#">Login</a>
                </li>
                <li className="font-bold text-lg">
                  <a className="btn w-full rounded-full p-2.5 md:px-6" href="#">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}