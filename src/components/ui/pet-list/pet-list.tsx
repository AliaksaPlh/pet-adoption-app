'use client';
import React, { useState } from 'react';
import { useGetPetsByPageQuery } from '@/store/slice/petsApi';
import { type PetListProps, Pet } from '@/types/types';
import PetCard from '@/components/ui/pet-card/pet-card';
import PetCardDetails from '@/components/ui/pet-card-details/pet-card-details';
import PetFilters from '@/components/ui/pet-filters/pet-filters';
import styles from './pet-list.module.scss';
import { toast } from 'react-toastify';
import CircleLoader from '@/components/ui/circle-loader/circle-loader';
import Pagination from '@/components/ui/pagination/pagination';

const PetList: React.FC<PetListProps> = ({ language }) => {
  const [page, setPage] = useState(1);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [filterType, setFilterType] = useState<string | undefined>();

  console.log('Active filter:', filterType);

  const { data, isLoading, isError } = useGetPetsByPageQuery({
    page,
    lang: language,
    type: filterType || '',
  });

  if (isLoading) return <CircleLoader />;
  if (isError)
    return toast.error('Something went wrong while fetching pets, try later.');

  const handleFilterChange = (type: string | undefined) => {
    setPage(1);
    setFilterType(type);
  };

  return (
    <div>
      <PetFilters onFilterChange={handleFilterChange} />
      <ul className={styles.petList}>
        {data?.pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} onClick={() => setSelectedPet(pet)} />
        ))}
      </ul>
      {data && (
        <Pagination
          page={data.page}
          totalPages={data.totalPages}
          onPageChange={setPage}
        />
      )}
      {selectedPet && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedPet(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <PetCardDetails
              pet={selectedPet}
              onClose={() => setSelectedPet(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PetList;
