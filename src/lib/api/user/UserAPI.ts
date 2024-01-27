import { getAuthorizationHeader } from '@/lib/api/utils';
import { User } from '@/types/user';

import { client } from '../instance';
import { GetResponse } from "@/lib/api/user/types/GetResponse";

class UserAPI {
  async getUserFromToken() {
    const { data } = await client.get<User>(
      `/users/fromToken`,
      getAuthorizationHeader(),
    );
    return data;
  }

  async getUsers() {
    const { data } = await client.get<GetResponse>('/users');
    return data;
  }
}

export default new UserAPI();
