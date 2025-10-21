'use client';
import React from 'react';
import Button from '@/components/ui/button/button';
import styles from './pagination.module.scss';
import { type PaginationProps } from '@/types/types';

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className={styles.pagination}>
      <Button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="pagination-button secondary"
      >
        Previous
      </Button>

      <span>
        Page {page} / {totalPages}
      </span>

      <Button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="pagination-button secondary"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
