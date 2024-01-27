import { client } from '@/lib/api/instance';
import { LibraryVersion } from '@/types/libraryVersion';

class LibraryVersionAPI {
  async getByLibraryId(id: number) {
    const { data } = await client.get<LibraryVersion[]>(
      `/libraryVersions/by-library/${id}`,
    );
    return data;
  }
}

export default new LibraryVersionAPI();
