import { client } from '@/lib/api/instance';
import { Statistics } from '@/types/statistics';

class StatisticsAPI {
  async getTopDownloads() {
    const { data } = await client.get<Statistics[]>(
      '/statistics/top-downloads',
    );
    return data;
  }
}

export default new StatisticsAPI();
