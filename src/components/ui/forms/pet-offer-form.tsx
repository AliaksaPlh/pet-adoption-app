'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { petOfferFormSchema, type PetOfferForm } from '@/utils/validation';
import { FieldInput } from '@/components/ui/field-input/field-input';
import Button from '@/components/ui/button/button';
import styles from './form.module.scss';
import { useLocale } from 'next-intl';
import { toast } from 'react-toastify';
import { Select } from '@/components/ui/selector/select';
import { FILTERSEN, FILTERSRU } from '@/constants/filteres';
import {
  GENDER_OPTIONS_EN,
  GENDER_OPTIONS_RU,
  FUR_TYPE_OPTIONS_EN,
  FUR_TYPE_OPTIONS_RU,
} from '@/constants/consts';
import { PetOfferFormProps } from '@/types/types';

export default function PetOfferForm({ onClose }: PetOfferFormProps) {
  const t = useTranslations('PetOfferForm');
  const tV = useTranslations('Validation');
  const locale = useLocale();
  const schema = petOfferFormSchema(tV);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<PetOfferForm>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const genderOptions = locale === 'ru' ? GENDER_OPTIONS_RU : GENDER_OPTIONS_EN;
  const typeOptions = locale === 'ru' ? FILTERSRU : FILTERSEN;
  const furTypeOptions =
    locale === 'ru' ? FUR_TYPE_OPTIONS_RU : FUR_TYPE_OPTIONS_EN;

  const onSubmit = async (data: PetOfferForm) => {
    try {
      const response = await fetch('/api/pet-offer', {
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
      console.error('Error submitting pet offer form:', error);
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
        <label className={styles.label}>{t('petType')}</label>
        <Controller
          name="petType"
          control={control}
          render={({ field }) => (
            <Select
              options={typeOptions}
              placeholder={t('petTypePlaceholder')}
              defaultValue={field.value || ''}
              onChange={(value) => field.onChange(value || '')}
            />
          )}
        />
        {errors.petType && (
          <p className={styles.error}>{errors.petType.message}</p>
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
        <label className={styles.label}>{t('petAge')}</label>
        <FieldInput
          placeholder={t('petAgePlaceholder')}
          {...register('petAge')}
          disabled={isSubmitting}
          variant="form"
        />
        {errors.petAge && (
          <p className={styles.error}>{errors.petAge.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t('petColor')}</label>
        <FieldInput
          placeholder={t('petColorPlaceholder')}
          {...register('petColor')}
          disabled={isSubmitting}
          variant="form"
        />
        {errors.petColor && (
          <p className={styles.error}>{errors.petColor.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t('furType')}</label>
        <Controller
          name="furType"
          control={control}
          render={({ field }) => (
            <Select
              options={furTypeOptions}
              placeholder={t('furTypePlaceholder')}
              defaultValue={field.value || ''}
              onChange={(value) => field.onChange(value || '')}
            />
          )}
        />
        {errors.furType && (
          <p className={styles.error}>{errors.furType.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t('medicalNeeds')}</label>
        <textarea
          {...register('medicalNeeds')}
          placeholder={t('medicalNeedsPlaceholder')}
          className={styles.textarea}
          disabled={isSubmitting}
        />
        {errors.medicalNeeds && (
          <p className={styles.error}>{errors.medicalNeeds.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t('foundAt')}</label>
        <FieldInput
          placeholder={t('foundAtPlaceholder')}
          {...register('foundAt')}
          disabled={isSubmitting}
          variant="form"
        />
        {errors.foundAt && (
          <p className={styles.error}>{errors.foundAt.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t('notes')}</label>
        <textarea
          {...register('notes')}
          placeholder={t('notesPlaceholder')}
          className={styles.textarea}
          disabled={isSubmitting}
        />
        {errors.notes && <p className={styles.error}>{errors.notes.message}</p>}
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
