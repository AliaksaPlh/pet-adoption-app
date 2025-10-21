'use client';
import React, { useState } from 'react';
import { useGetPetsByPageQuery } from '@/store/slice/petsApi';
import { type PetListProps } from '@/types/types';
import PetCard from '@/components/ui/pet-card/pet-card';
import styles from './pet-list.module.scss';
import { toast } from 'react-toastify';
import CircleLoader from '@/components/ui/circle-loader/circle-loader';
import Pagination from '@/components/ui/pagination/pagination';

const PetList: React.FC<PetListProps> = ({ language }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetPetsByPageQuery({
    page,
    lang: language,
  });

  if (isLoading) return <CircleLoader />;
  if (isError)
    return toast.error('Something went wrong while fetching pets, try later.');

  return (
    <div>
      <ul className={styles.petList}>
        {data?.pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </ul>
      {data && (
        <Pagination
          page={data.page}
          totalPages={data.totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default PetList;
