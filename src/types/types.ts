export type Language = 'ru' | 'en';
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export interface Pet {
  id: number;
  name: string;
  gender?: string;
  photo: string;
  type: string;
  breed?: string;
  age?: string;
  color: string;
  character?: string;
  toilet?: string;
  medicalNeeds?: string;
  feeding?: string;
  foundAt?: string;
  history?: string;
  shelter?: string;
  contactPhone?: string;
  linkToPlatform?: string;
}

export interface PetsByPage {
  results: Pet[];
  total: number;
  page: number;
  limit: number;
}

export type PetCardProps = {
  pet: Pet;
  onClick?: () => void;
};
export type PetCardDetailsProps = {
  pet: Pet;
  onClose?: () => void;
  onfavorite?: () => void;
};

export type PetListProps = {
  language: 'en' | 'ru';
  pets?: Pet[];
};

export type PetFiltersProps = {
  onFilterChange: (type: string | undefined) => void;
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
  variant?: 'primary' | 'secondary' | 'closeButton';
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  style?: React.CSSProperties;
};

export type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  scaleOnHover?: boolean;
  style?: React.CSSProperties;
};

export interface AdoptionFormProps {
  onClose?: () => void;
}

export interface PetOfferFormProps {
  onClose?: () => void;
}

export interface Theme {
  theme: 'light' | 'dark';
  toggleTheme?: () => void;
  setTheme?: () => void;
}

// Select //

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  id?: string;
  options: SelectOption[];
  defaultValue?: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  className?: string;
}
