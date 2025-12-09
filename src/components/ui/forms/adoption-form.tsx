'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { adoptionFormSchema, type AdoptionForm } from '@/utils/validation';
import { FieldInput } from '@/components/ui/field-input/field-input';
import Button from '@/components/ui/button/button';
import styles from './form.module.scss';
import { useLocale } from 'next-intl';
import { toast } from 'react-toastify';
import { Select } from '@/components/ui/selector/select';
import { FILTERSEN, FILTERSRU } from '@/constants/filteres';
import { GENDER_OPTIONS_EN, GENDER_OPTIONS_RU } from '@/constants/consts';
import { AdoptionFormProps } from '@/types/types';

export default function AdoptionForm({ onClose }: AdoptionFormProps) {
  const t = useTranslations('AdoptionForm');
  const tV = useTranslations('Validation');
  const locale = useLocale();
  const schema = adoptionFormSchema(tV);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<AdoptionForm>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const genderOptions = locale === 'ru' ? GENDER_OPTIONS_RU : GENDER_OPTIONS_EN;
  const typeOptions = locale === 'ru' ? FILTERSRU : FILTERSEN;

  const onSubmit = async (data: AdoptionForm) => {
    try {
      const response = await fetch('/api/adoption', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || t('submitError'));
      }
      toast.success(t('submitSuccess'));
      reset();
      if (onClose) {
        setTimeout(onClose, 1000);
      }
    } catch (error) {
      console.error('Error submitting adoption form:', error);
      toast.error(error instanceof Error ? error.message : t('submitError'));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {onClose && (
        <Button
          type="button"
          onClick={onClose}
          aria-label="Close form"
          variant="closeButton"
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        >
          ✕
        </Button>
      )}
      <h3 className={styles.title}>{t('title')}</h3>

      <div className={styles.field}>
        <label className={styles.label}>{t('petName')}</label>
        <FieldInput
          placeholder={t('petNamePlaceholder')}
          {...register('petName')}
          disabled={isSubmitting}
          variant="form"
        />
        {errors.petName && (
          <p className={styles.error}>{errors.petName.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t('petGender')}</label>
        <Controller
          name="petGender"
          control={control}
          render={({ field }) => (
            <Select
              options={genderOptions}
              placeholder={t('petGenderPlaceholder')}
              defaultValue={field.value || ''}
              onChange={(value) => field.onChange(value || '')}
            />
          )}
        />
        {errors.petGender && (
          <p className={styles.error}>{errors.petGender.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t('petType')}</label>
        <Controller
          name="petType"
          control={control}
          render={({ field }) => (
            <Select
              options={typeOptions}
              placeholder={t('petTypePlaceholder')}
              defaultValue={field.value}
              onChange={(value) => field.onChange(value || '')}
            />
          )}
        />
        {errors.petType && (
          <p className={styles.error}>{errors.petType.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t('applicantName')}</label>
        <FieldInput
          placeholder={t('applicantNamePlaceholder')}
          {...register('applicantName')}
          disabled={isSubmitting}
          variant="form"
        />
        {errors.applicantName && (
          <p className={styles.error}>{errors.applicantName.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t('phone')}</label>
        <FieldInput
          type="tel"
          placeholder={t('phonePlaceholder')}
          {...register('phone')}
          disabled={isSubmitting}
          variant="form"
        />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={!isValid || isSubmitting}
        isLoading={isSubmitting}
      >
        {t('submit')}
      </Button>
    </form>
  );
}
