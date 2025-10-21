export interface Pet {
  id: number;
  name: string;
  photo: string;
  type: string;
  age?: string;
  color: string;
  character?: string;
  toilet?: string;
  foundAt?: string;
  history?: string;
}

export interface PetsByPage {
  results: Pet[];
  total: number;
  page: number;
  limit: number;
}

export interface PetCardProps {
  pet: Pet;
}

export type PetListProps = {
  language: 'en' | 'ru';
};

export type PetsResponse = {
  pets: Pet[];
  total: number;
  page: number;
  totalPages: number;
};

export interface AuthUser {
  uid: string;
  email: string | null;
  name: string | null;
}

export interface AuthUserContextType {
  authUser: AuthUser | null;
  loading: boolean;
}

export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

export type PageProps = {
  children: React.ReactNode;
  centered?: boolean;
  skipAuthGuard?: boolean;
};

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'removeButton' | 'ghost';
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};

export type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  scaleOnHover?: boolean;
};
