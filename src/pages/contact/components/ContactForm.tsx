import { TextInput } from "../../../components/forms/TextInput.tsx";
import { FormWrapper } from "../../../components/forms/FormWrapper.tsx";
import type { IContactForm } from "../../../common/types.ts";
import { contactFormSchema } from "./contants.ts";
import { useForm } from "../../../hooks/forms..ts";
import {TextArea} from "../../../components/forms/TextArea.tsx";
import {CustomButton} from "../../../components/buttons/CustomBtn.tsx";

export const ContactForm = () => {
  const contactForm = useForm<IContactForm>({
    schema: contactFormSchema,
    defaultValues: {}
  });

  const values = contactForm.watch();

  return (
    <div>
      <FormWrapper
        className="gap-[25px] flex flex-col"
        onSubmit={contactForm.handleSubmit(() => {})}
      >
        <TextInput
          name="name"
          type="text"
          placeholder="Your name"
          register={contactForm.register}
          value={values.name}
          error={contactForm?.formState.errors.name?.message}
        />
        <TextInput
          name="email"
          type="email"
          placeholder="Your email"
          register={contactForm.register}
          error={contactForm?.formState.errors.email?.message}
        />
        <TextInput
          name="subject"
          type="text"
          placeholder="Subject"
          register={contactForm.register}
          error={contactForm?.formState.errors.subject?.message}
        />
        <TextArea
          name="message"
          placeholder="Message"
          className="h-[238px]"
          register={contactForm.register}
          error={contactForm?.formState.errors.message?.message}
        />
        <CustomButton className="xl:w-[380px] w-full 5xl:text-[17px] text-[15px] button transition duration-300 ease font-semibold py-[10px] px-[25px] text-center rounded-[8px] border border-solid border-blue-light bg-blue-light text-white hover:text-blue-light hover:bg-white mx-auto" type="submit">Submit message</CustomButton>
      </FormWrapper>

    </div>
  );
}