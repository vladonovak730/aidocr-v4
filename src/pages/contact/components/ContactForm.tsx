import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { TextInput } from '../../../components/forms/TextInput';
import { FormWrapper } from '../../../components/forms/FormWrapper';
import { type Contact, contactFormSchema } from './contants';
import { TextArea } from '../../../components/forms/TextArea';
import { CustomButton } from '../../../components/buttons/CustomButton';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaError, setCaptchaError] = useState<string>('');
  const [, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const siteKey = import.meta.env.VITE_SITE_KEY;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const values = watch();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onSubmit = async (data: Contact) => {
    // Clear previous errors
    setCaptchaError('');
    setSubmitStatus('idle');
    
    // Check if reCAPTCHA is completed
    const captchaValue = recaptchaRef.current?.getValue();
    if (!captchaValue) {
      setCaptchaError('Please complete the reCAPTCHA verification');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create form data
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);
      formData.append('g-recaptcha-response', captchaValue);
      formData.append('submit', 'true');
      
      // Debug: Log the form data being sent
      console.log('Submitting form with data:', {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        recaptcha: captchaValue ? 'COMPLETED' : 'NOT_COMPLETED'
      });
      
      // Submit to PHP endpoint
      const response = await fetch('/send_email.php', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();
      console.log('PHP Response:', responseData);

      if (response.ok && responseData.success) {
        setSubmitStatus('success');
        reset(); // Reset form
        recaptchaRef.current?.reset(); // Reset reCAPTCHA
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptchaError('');
    }
  };

  return (
    <div>
      <FormWrapper
        className="gap-6 flex flex-col"
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
          className="h-59.5"
          register={register}
          error={errors.message?.message}
        />
        {siteKey ? (
           <div className='flex flex-col items-center justify-center'>
             <ReCAPTCHA 
               ref={recaptchaRef} 
               sitekey={siteKey} 
               onChange={handleCaptchaChange}
             />
             {captchaError && (
               <div className="text-red-500 text-sm mt-2">
                 {captchaError}
               </div>
             )}
           </div>
         ) : (
           <div className="text-red-500 text-sm">
             reCAPTCHA site key not configured. Please check your .env file.
           </div>
         )}
         <CustomButton
           className="md:w-95 w-full 2xl:text-[17px] text-[15px] button transition duration-300 ease font-semibold py-2.5 px-6 text-center rounded-[8px] border border-solid border-blue-light bg-blue-light text-white hover:text-blue-light hover:bg-white mx-auto"
           type="submit"
           disabled={isSubmitting}
         >
           {isSubmitting ? 'Sending...' : 'Submit message'}
         </CustomButton>
      </FormWrapper>
    </div>
  );
};
