import { Link } from 'react-router-dom';
import { MADE_BY_ADDRESSES, PHONES, USEFUL_LINKS } from './constants';
import { useEffect, useState } from 'react';

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="text-white bg-blue-light">
      <div className="2xl:text-[17px] text-[15px]  md:pt-10 md:pb-27 py-20">
        <div className="container">
          <div className="flex flex-start xl:flex-nowrap flex-wrap md:flex-row md:justify-between  gap-10 md:flex-wrap md:gap-10 flex-col justify-center text-center">
            <Link
              className="font-aidocr text-4xl hover:text-hover transition-all duration-300 ease-in-out leading-[1.21] h-fit"
              to="/"
            >
              aidocr
            </Link>
            <div>
              <div className="font-bold mb-4 !text-white 2xl:text-[17px] text-[15px]">
                Made by Aidocr AG
              </div>
              <ul>
                {MADE_BY_ADDRESSES.map((address, index) => (
                  <li
                    key={index}
                    className="mb-4 flex flex-col md:items-start items-center font-[300]"
                  >
                    {address}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col md:items-start items-center">
              <div className="font-bold mb-4 !text-white 2xl:text-[17px] text-[15px]">
                Phone:
              </div>
              <ul className="flex flex-col md:items-start items-center">
                {PHONES.map((phone) => (
                  <li key={phone.number} className="mb-4 font-[300]">
                    <a
                      className="hover:underline"
                      property="telephone"
                      href={`tel:${phone.number}`}
                    >
                      {phone.code} {phone.number}
                    </a>
                  </li>
                ))}

                <li className="mb-4 flex flex-col md:items-start items-center">
                  <div className="font-bold mb-4 !text-white 2xl:text-[17px] text-[15px]">
                    Email:
                  </div>
                  <a
                    className="hover:underline font-[300]"
                    property="email"
                    href="mailto:info@aidocr.com"
                  >
                    info@aidocr.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:items-start items-center">
              <div className="font-bold mb-4 !text-white 2xl:text-[17px] text-[15px]">
                Useful links:
              </div>
              <ul className="flex flex-col md:items-start items-center">
                {USEFUL_LINKS.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      className="hover:underline font-[300]"
                      to={item.link}
                      target={item.target}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-base bg-blue-dark py-4 md:text-base md:leading-[1.11] text-sm leading-[1.7] md:text-left text-center">
        <div className="container">
          © Copyright by Aidocr AG, Switzerland. All Rights Reserved
        </div>
      </div>
      <button
        id="goTop"
        className={`fixed bottom-17.5 cursor-pointer text-[11px] w-10 h-10 right-6 bg-black hover:bg-secondary text-white rounded-[3px] shadow-lg transition-all duration-300 hover:scale-110 ${
          showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        TOP
      </button>
    </footer>
  );
};
