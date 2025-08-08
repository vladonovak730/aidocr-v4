import { Link } from 'react-router-dom'
import { MADE_BY_ADDRESSES, PHONES, USEFUL_LINKS } from './constants'

export const Footer = () => {
  return (
    <footer className="text-white bg-blue-light">
      <div className="5xl:text-[17px] text-[15px]  2xl:pt-[40px] 2xl:pb-[95px] py-[80px]">
        <div className="container">
          <div className="flex flex-start 4xl:flex-nowrap flex-wrap 2xl:flex-row 2xl:justify-between  gap-[40px] 2xl:flex-wrap 2xl:gap-[40px] flex-col justify-center text-center">
            <Link className="font-aidocr text-[37px] hover:text-hover transition-all duration-300 ease-in-out leading-[1.21] h-fit" to="/">
              aidocr
            </Link>
            <div>
              <div className="font-bold mb-2 !text-white 5xl:text-[17px] text-[15px]">Made by Aidocr AG</div>
              <ul>
                {MADE_BY_ADDRESSES.map((address, index) => <li key={index} className="mb-[15px]">{address}</li>)}
              </ul>
            </div>

            <div className="">
              <h5 className="font-bold mb-2 !text-white 5xl:text-[17px] text-[15px]">Phone:</h5>
              <ul>
                {PHONES.map(phone => (
                  <li key={phone.number} className="mb-[15px]">
                    <a 
                      className="hover:underline" 
                      property="telephone" 
                      href={`tel:${phone.number}`}
                    >
                      {phone.code} {phone.number}
                    </a>
                  </li>
                ))}

                <li className="mb-[15px]">
                  <h5 className="list__title font-bold mb-2 !text-white 5xl:text-[17px] text-[15px]">Email:</h5>
                  <a 
                    className="hover:underline" 
                    property="email" 
                    href="mailto:info@aidocr.com"
                  >
                    info@aidocr.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <h5 className="font-bold mb-2 !text-white 5xl:text-[17px] text-[15px]">Useful links:</h5>
              <ul>
                {USEFUL_LINKS.map((item, index) => (
                  <li key={index} className="mb-[15px]">
                    <Link className="hover:underline" to={item.link} target={item.target}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-base bg-blue-dark py-4 2xl:text-[16px] 2xl:leading-[1.11] text-[14px] leading-[1.7] 2xl:text-left text-center">
        <div className="container">
          © Copyright by Aidocr AG, Switzerland. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}