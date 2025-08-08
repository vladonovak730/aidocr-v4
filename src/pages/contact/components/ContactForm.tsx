import { TextInput } from "../../../components/forms/TextInput.tsx";
import { FormWrapper } from "../../../components/forms/FormWrapper.tsx";
import { contactFormSchema } from "./contants.ts";
import { TextArea } from "../../../components/forms/TextArea.tsx";
import { CustomButton } from "../../../components/buttons/CustomBtn.tsx";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const ContactForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const values = watch();

  return (
    <div>
      <FormWrapper
        className="gap-[25px] flex flex-col"
        onSubmit={() => handleSubmit}
      >
        <TextInput
          name="name"
          type="text"
          placeholder="Your name"
          register={register}
          value={values.name}
          error={errors.name?.message}
        />
        <TextInput
          name="email"
          type="email"
          placeholder="Your email"
          register={register}
          error={errors.email?.message}
        />
        <TextInput
          name="subject"
          type="text"
          placeholder="Subject"
          register={register}
          error={errors.subject?.message}
        />
        <TextArea
          name="message"
          placeholder="Message"
          className="h-[238px]"
          register={register}
          error={errors.message?.message}
        />
        <CustomButton className="xl:w-[380px] w-full 5xl:text-[17px] text-[15px] button transition duration-300 ease font-semibold py-[10px] px-[25px] text-center rounded-[8px] border border-solid border-blue-light bg-blue-light text-white hover:text-blue-light hover:bg-white mx-auto" type="submit">Submit message</CustomButton>
      </FormWrapper>

    </div>
  );
}