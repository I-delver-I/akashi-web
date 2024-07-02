import { AccessToken } from '@/types/accessToken';

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface AuthUser {
  user: User;
  token: AccessToken;
}
