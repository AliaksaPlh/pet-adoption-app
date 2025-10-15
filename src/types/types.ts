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

export interface PetListProps {
  language: 'en' | 'ru';
}

export interface AuthUser {
  uid: string;
  email: string | null;
  name: string | null;
}

export interface AuthUserContextType {
  authUser: AuthUser | null;
  loading: boolean;
}
