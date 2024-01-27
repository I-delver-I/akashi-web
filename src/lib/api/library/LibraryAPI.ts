import { FilterFrameworkProductNames } from '@/components/pages/library-search/components/framework-filter/FrameworkFilter';
import { OrderBy } from '@/components/pages/library-search/components/sort-dropdown/SortDropdown';
import { client } from '@/lib/api/instance';
import { LibraryBody } from '@/lib/api/library/types/LibraryBody';
import { getAuthorizationHeader } from '@/lib/api/utils';
import { Library, PaginatedLibraries } from '@/types/library';

class LibraryAPI {
  async get(
    frameworkFilter: FilterFrameworkProductNames,
    orderBy?: OrderBy,
    searchTerm?: string,
    pageNumber?: number,
    pageSize?: number,
  ) {
    const url = searchTerm
      ? `/libraries?searchTerm=${searchTerm}`
      : '/libraries';

    const { data } = await client.get<PaginatedLibraries>(url, {
      headers: {
        dotNet: frameworkFilter.dotNet,
        dotNetCore: frameworkFilter.dotNetCore,
        dotNetStandard: frameworkFilter.dotNetStandard,
        dotNetFramework: frameworkFilter.dotNetFramework,
        pageNumber,
        pageSize,
      },
    });
    console.log(data.items);
    return data;
  }

  async getById(id: number) {
    const { data } = await client.get<Library>(`/libraries/${id}`);
    return data;
  }

  async create(body: LibraryBody) {
    const { data } = await client.post(
      '/libraries',
      body,
      getAuthorizationHeader(),
    );
    return data;
  }
}

export default new LibraryAPI();
