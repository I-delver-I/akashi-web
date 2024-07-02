import { User } from '@/types/user';

export interface AuthenticationContext {
  user: User | null;
  update: () => Promise<void>;
}

export interface UseAuthenticationReturn extends AuthenticationContext {
  isLoggedIn: boolean;
}
