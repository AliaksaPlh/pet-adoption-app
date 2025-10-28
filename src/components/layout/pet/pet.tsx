'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useGetPetByNameQuery } from '@/store/slice/petsApi';
import { useTranslations } from 'next-intl';
import styles from './pet.module.scss';
import CircleLoader from '@/components/ui/circle-loader/circle-loader';
import { type Pet } from '@/types/types';

export default function Pet() {
  const { name, locale } = useParams() as { name: string; locale: string };
  const t = useTranslations('PetCard');
  const {
    data: pet,
    isLoading,
    isError,
  } = useGetPetByNameQuery({
    name: decodeURIComponent(name),
    lang: locale,
  });

  if (isLoading) return <CircleLoader />;
  if (isError || !pet) return <p>{t('notFound')}</p>;

  return (
    <div className={styles.wrapper}>
      <Image src={pet.photo} alt={pet.name} width={400} height={300} />
      <h1>{pet.name}</h1>
      <p>{pet.type}</p>
      <p>{pet.age}</p>
      <p>{pet.gender}</p>
      <p>{pet.character}</p>
      {pet.medicalNeeds && <p>{pet.medicalNeeds}</p>}
      {pet.toilet && <p>{pet.toilet}</p>}
      {pet.shelter && <p>{pet.shelter}</p>}
      {pet.history && <p>{pet.history}</p>}
    </div>
  );
}
