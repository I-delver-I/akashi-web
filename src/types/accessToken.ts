import { AccessTokenDetails } from '@/types/accessTokenDetails';

export interface AccessToken {
  accessToken: AccessTokenDetails;
  refreshToken: string;
}
