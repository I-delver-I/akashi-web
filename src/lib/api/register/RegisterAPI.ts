import { client } from '@/lib/api/instance';
import { RegisterBody } from '@/lib/api/register/types/RegisterBody';
import { AuthUser } from '@/types/user';

class RegisterAPI {
  async register(body: RegisterBody) {
    console.log(body);
    const { data } = await client.post<AuthUser>('/register', body);
    return data;
  }
}

export default new RegisterAPI();
