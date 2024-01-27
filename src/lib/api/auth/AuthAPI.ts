import { AuthBody } from '@/lib/api/auth/types/AuthBody';
import { AuthUser } from '@/types/user';

import { client } from '../instance';

class AuthAPI {
  async auth(body: AuthBody) {
    const { data } = await client.post<AuthUser>('/auth/login', body);
    return data;
  }

  // async checkResetToken(token: string) {
  //   const { data } = await client.get(`auth/checkResetToken/${token}`);
  //   return data;
  // }
}

export default new AuthAPI();
