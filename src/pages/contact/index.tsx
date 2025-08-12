import { Section } from '../../components/section';
import { ContactCard } from './components/ContactCard';
import {
  EMAILS,
  MADE_BY_ADDRESSES,
  PHONES,
} from '../../components/layout/footer/constants';
import { ContactForm } from './components/ContactForm';
import { Title } from '../../components/ui/Title';
import { SubTitle } from '../../components/ui/SubTitle';

export const ContactPage = () => {
  const phoneData = [
    { value: 'Also Whatsapp' },
    ...PHONES.map((item) => ({
      value: `${item.code} ${item.number}`,
    })),
  ];

  const addresses = MADE_BY_ADDRESSES.map((address) => ({
    value: address,
  }));

  const emails = [
    ...EMAILS.map((email) => ({
      value: email,
      linkable: true,
      option: 'mailto',
    })),
    { value: 'or use our E-mail form' },
  ];

  const timezone = [
    { value: 'CET / EUROPE Zurich' },
    { value: 'Office hours' },
    { value: '09:00 - 17:00' },
  ];

  return (
    <Section className="bg-blue">
      <div className="container">
        <br />
        <br />
        <div className="md:w-[60%] h-full flex flex-col md:py-0 py-[40px]">
          <Title>Get in touch with us</Title>
          <SubTitle>
            We would love to hear from you! Whether you're interested in a live
            demo or discussing how to implement AI in your company, feel free to
            reach out.
          </SubTitle>
        </div>

        <div className="flex-between lg:flex-row flex-col grid xl:grid-cols-2 grid-cols-1 gap-[40px]">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-[17px]">
            <ContactCard
              image="/assets/static/images/place.svg"
              title="ADDRESS"
              contactInfos={addresses}
            />
            <ContactCard
              image="/assets/static/images/chat.svg"
              title="CALL US"
              contactInfos={phoneData}
            />
            <ContactCard
              image="/assets/static/images/email.svg"
              title="E-MAIL US"
              contactInfos={emails}
            />
            <ContactCard
              image="/assets/static/images/world.svg"
              title="TIME ZONE"
              contactInfos={timezone}
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};
