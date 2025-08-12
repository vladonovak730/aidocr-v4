import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { TextInput } from '../../../components/forms/TextInput';
import { FormWrapper } from '../../../components/forms/FormWrapper';
import { contactFormSchema } from './contants';
import { TextArea } from '../../../components/forms/TextArea';
import { CustomButton } from '../../../components/buttons/CustomButton';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const values = watch();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create FormData object to match the PHP $_POST structure
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);
      formData.append('submit', 'true');

      // Send the form data to your PHP API endpoint
      const response = await fetch('/api/send_email.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        reset(); // Clear the form
        // Optionally redirect after a delay like the original PHP does
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        setSubmitStatus('error');
        console.error('Server error:', result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitStatus === 'success' && (
        <div className="mb-4 p-[16px] bg-green-100 border border-green-400 text-green-700 rounded text-[16px]">
          <p>
            Thanks for your message! We will get back to you shortly. You will
            be redirected to the main page in 2 seconds.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-[16px] bg-red-100 border border-red-400 text-red-700 rounded  text-[16px]">
          <p>Failed to send email - Please try again.</p>
        </div>
      )}

      <FormWrapper
        className="gap-[25px] flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
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
        <CustomButton
          className="md:w-[380px] w-full 2xl:text-[17px] text-[15px] button transition duration-300 ease font-semibold py-[10px] px-[25px] text-center rounded-[8px] border border-solid border-blue-light bg-blue-light text-white hover:text-blue-light hover:bg-white mx-auto"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit message'}
        </CustomButton>
      </FormWrapper>
    </div>
  );
};
