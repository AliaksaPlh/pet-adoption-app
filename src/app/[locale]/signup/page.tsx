﻿'use client';
import { registerWithEmailAndPassword } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { signUpSchema, type SignUpForm } from '@/utils/validation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from '@/app/[locale]/signin/signin.module.scss';
import { useTranslations } from 'next-intl';
import AppLink from '@/components/ui/app-link/app-link';
import Button from '@/components/ui/button/button';
import { FieldInput } from '@/components/ui/field-input/field-input';
import Page from '@/components/layout/page/page';

export default function SignUpPage() {
  const router = useRouter();
  const t = useTranslations('SignUp');
  const tV = useTranslations('Validation');
  const schema = signUpSchema(tV);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SignUpForm>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: SignUpForm) => {
    const success = await registerWithEmailAndPassword(
      data.name,
      data.email,
      data.password
    );
    if (success) router.push(ROUTES.HOME);
  };

  return (
    <Page skipAuthGuard={true}>
      <div className={`${styles.content} ${styles.contentSighUp}`}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.formContainer}
        >
          <h3 className={styles.title}>{t('title')}</h3>
          <FieldInput
            type="text"
            placeholder={t('name')}
            disabled={isSubmitting}
            {...register('name')}
          />
          <p className={styles.error}>{errors.name?.message || ''}</p>
          <FieldInput
            type="email"
            placeholder={t('email')}
            disabled={isSubmitting}
            {...register('email')}
          />
          <p className={styles.error}>{errors.email?.message || ''}</p>{' '}
          <FieldInput
            type="password"
            placeholder={t('password')}
            disabled={isSubmitting}
            {...register('password')}
          />
          <p className={styles.error}>{errors.password?.message || ''}</p>
          <FieldInput
            type="password"
            placeholder={t('passwordConfirm')}
            disabled={isSubmitting}
            {...register('confirmPassword')}
          />
          <p className={styles.error}>
            {errors.confirmPassword?.message || ''}
          </p>
          <Button
            isLoading={isSubmitting}
            disabled={!isValid || isSubmitting}
            type={'submit'}
          >
            {t('submitBtn')}
          </Button>
        </form>
        <div>
          <p className={styles.linkWrapper}>
            {t('linkWrapper')}
            <AppLink href={ROUTES.SIGN_IN}>{t('signInLink')}</AppLink>
          </p>
        </div>
      </div>
    </Page>
  );
}
