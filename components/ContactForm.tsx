'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Users } from 'lucide-react';

import Input from './Input';
import Select from './Select';
import { AppButton } from './AppButton';
import {
  contactSchema,
  ContactFormData,
} from '@/lib/validators/contact.schema';

const ContactForm = () => {
  const options = [
    { label: 'Risk Assessment', value: 'risk' },
    { label: 'Data Integration', value: 'data' },
    { label: 'Asset Protection', value: 'asset' },
    { label: 'Other', value: 'other' },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      reset();
      alert('Message sent successfully!');
    } else {
      alert('Something went wrong.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-end gap-8 w-full"
    >
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <Input
          label="Name"
          placeholder="Input your full name"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          label="Company"
          placeholder="Company Name"
          {...register('company')}
          error={errors.company?.message}
        />
      </div>

      {/* Business Type */}
      <Select
        label="Business Type"
        options={options}
        {...register('businessType')}
        error={errors.businessType?.message}
      />

      <AppButton
        type="submit"
        leftIcon={<Users size={20} />}
        disabled={isSubmitting}
        className="w-full md:w-fit"
      >
        Contact Enterprise Sales
      </AppButton>
    </form>
  );
};

export default ContactForm;
