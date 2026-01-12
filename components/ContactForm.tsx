'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Input from './Input';
import Select from './Select';
import { AppButton } from './AppButton';
import {
  contactSchema,
  ContactFormData,
} from '@/lib/validators/contact.schema';

const ContactForm = () => {
  const t = useTranslations('Contact.form');

  // Get form field data from translations
  const formFields = {
    name: {
      label: t('fields.name.label'),
      placeholder: t('fields.name.placeholder'),
    },
    company: {
      label: t('fields.company.label'),
      placeholder: t('fields.company.placeholder'),
    },
    businessType: {
      label: t('fields.businessType.label'),
      options: t.raw('fields.businessType.options') as Array<{ label: string; value: string }>,
    },
  };

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
      alert(t('messages.success'));
    } else {
      alert(t('messages.error'));
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
          label={formFields.name.label}
          placeholder={formFields.name.placeholder}
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          label={formFields.company.label}
          placeholder={formFields.company.placeholder}
          {...register('company')}
          error={errors.company?.message}
        />
      </div>

      {/* Business Type */}
      <Select
        label={formFields.businessType.label}
        options={formFields.businessType.options}
        {...register('businessType')}
        error={errors.businessType?.message}
      />

      <AppButton
        type="submit"
        leftIcon={<Users size={20} />}
        disabled={isSubmitting}
        className="w-full md:w-fit"
      >
        {t('submitButton.label')}
      </AppButton>
    </form>
  );
};

export default ContactForm;
