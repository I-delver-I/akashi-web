import AuthAPI from '@/lib/api/auth/AuthAPI';
import { AuthBody } from '@/lib/api/auth/types/AuthBody';
import RegisterAPI from '@/lib/api/register/RegisterAPI';
import { RegisterBody } from '@/lib/api/register/types/RegisterBody';
import StorageUtil from '@/lib/utils/StorageUtil';

class AuthService {
  static async logout() {
    StorageUtil.deleteTokens();
  }

  static async login(data: AuthBody) {
    const authUser = await AuthAPI.auth(data);
    StorageUtil.setTokens(
      authUser.token.accessToken.token,
      authUser.token.refreshToken,
    );
  }

  static async register(data: RegisterBody) {
    await RegisterAPI.register(data);
  }
}

export default AuthService;
