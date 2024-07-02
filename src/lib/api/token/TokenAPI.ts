import { client } from '@/lib/api/instance';
import { RefreshAccessTokenResponse } from '@/lib/api/token/types/RefreshAccesTokenResponse';
import { RefreshTokenBody } from '@/lib/api/token/types/RefreshTokenBody';
import { RevokeRefreshTokenBody } from '@/lib/api/token/types/RevokeRefreshTokenBody';
import StorageUtil from '@/lib/utils/StorageUtil';

class TokenAPI {
  async refreshAccessToken(body: RefreshTokenBody) {
    const { data } = await client.post<RefreshAccessTokenResponse>(
      '/token/refresh',
      body,
      {
        headers: {
          Authorization: `Bearer ${StorageUtil.getTokens()?.refreshToken}`,
        },
      },
    );
    return data;
  }

  async revokeRefreshToken(body: RevokeRefreshTokenBody) {
    await client.post('/token/revoke', body);
  }
}

export default new TokenAPI();
