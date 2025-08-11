import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerButton } from '../../buttons/HamburgerButton.tsx';

const menus = [
  {
    label: 'HOME',
    link: '/',
  },
  {
    label: 'SOLUTION',
    link: '/solution',
  },
  {
    label: 'ABOUT',
    link: '/about',
  },
  {
    label: 'CONTACT',
    link: '/contact',
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const baseClass = `
    4xl:ml-[54px] relative inline-block font-normal transition-all duration-300 ease-in-out
    cursor-pointer 5xl:text-[12px] 4xl:text-[19px] text-[25px] 4xl:text-black text-white
    before:content-[''] before:absolute before:w-0 before:h-[2px] lg:h-auto
    before:bottom-[-3px] before:right-0 before:bg-white
    before:transition-all before:duration-300 before:ease-in-out
    hover:before:w-full hover:before:right-auto hover:before:left-0
    4xl:mb-0 mb-4
    ${
      isMenuOpen
        ? 'after:content-[""] after:absolute after:bottom-[-3px] after:left-0 after:w-full after:h-[2px]'
        : ''
    }
  `;

  return (
    <header className="h-auto flex flex-col" id="header">
      <div className="bg-primary w-full h-[70px] shadow-header z-10 fixed">
        <div className="flex items-center h-full">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between py-[16px] relative">
              <Link to="/" onClick={closeMenu}>
                <img
                  className="max-w-[115px]"
                  src="/assets/static/images/logo-header-color.svg"
                  alt="Aidocr"
                />
              </Link>
              <nav>
                <ul
                  className={`4xl:relative flex 4xl:flex-row items-center fixed 4xl:top-auto 4xl:left-auto left-0 top-[70px] 4xl:h-auto overflow-hidden h-0 4xl:w-auto w-full flex-col justify-center transition-all duration-300 4xl:bg-transparent bg-[#122e52] ${isMenuOpen && 'h-[calc(100%-70px)] z-100'}`}
                >
                  {menus.map((menu) => (
                    <li key={menu.label} className={baseClass}>
                      <Link to={menu.link} onClick={closeMenu}>
                        {menu.label}
                      </Link>
                    </li>
                  ))}
                  <li className={baseClass}>
                    <a
                      href="https://app.aidocr.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      CLIENT LOG-IN
                    </a>
                  </li>
                </ul>
              </nav>
              <HamburgerButton onClick={toggleMenu} isActive={isMenuOpen} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
