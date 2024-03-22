import { FilterFrameworkProductNames } from '@/components/pages/library-search/components/framework-filter/FrameworkFilter';
import { SortBy } from '@/components/pages/library-search/components/sort-dropdown/SortDropdown';
import { client } from '@/lib/api/instance';
import { LibraryBody } from '@/lib/api/library/types/LibraryBody';
import { getAuthorizationHeader } from '@/lib/api/utils';
import { Library, PaginatedLibraries } from '@/types/library';

class LibraryAPI {
  async get(
    pageSize: number,
    frameworksFilter?: FilterFrameworkProductNames,
    sortBy?: SortBy,
    searchTerm?: string,
    pageNumber?: number,
  ) {
    const queryParams = [];

    if (pageNumber) {
      queryParams.push(`page=${encodeURIComponent(pageNumber)}`);
    }

    queryParams.push(`q=${encodeURIComponent(searchTerm || '')}`);

    if (sortBy) {
      queryParams.push(`sortby=${encodeURIComponent(sortBy)}`);
    }

    const frameworks: string[] = [];
    if (frameworksFilter?.net) {
      frameworks.push('net');
    }
    if (frameworksFilter?.netFramework) {
      frameworks.push('netframework');
    }
    if (frameworksFilter?.netCore) {
      frameworks.push('netcoreapp');
    }
    if (frameworksFilter?.netStandard) {
      frameworks.push('netstandard');
    }

    if (frameworks.length > 0) {
      queryParams.push(`frameworks=${frameworks.join(',')}`);
    }

    const url = `/libraries${
      queryParams.length > 0 ? `?${queryParams.join('&')}` : ''
    }`;

    const { data } = await client.get<PaginatedLibraries>(url, {
      headers: {
        pageSize,
      },
    });

    // @ts-ignore
    data.items = data.items.$values;
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
