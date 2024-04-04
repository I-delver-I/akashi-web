import { FilterFrameworkProductNames } from '@/components/pages/library-search/components/framework-filter/FrameworkFilter';
import { SortBy } from '@/components/pages/library-search/components/sort-dropdown/SortDropdown';
import { client } from '@/lib/api/instance';
import { getAuthorizationHeader } from '@/lib/api/utils';
import { LibraryWithDetails, PaginatedLibraries } from '@/types/library';

class LibraryAPI {
  async getCurrentUserLibraries() {
    let { data } = await client.get<LibraryWithDetails[]>(
      '/libraries/current-user',
      getAuthorizationHeader(),
    );

    // @ts-expect-error: The $values property does not exist on type 'unknown'.
    data = data.$values;
    data.forEach((library: LibraryWithDetails) => {
      // @ts-expect-error: The $values property does not exist on type 'unknown'.
      library.libraryVersions = library.libraryVersions.$values;
    });
    return data;
  }

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

    // @ts-expect-error: The $values property does not exist on type 'unknown'.
    data.items = data.items.$values;
    data.items.forEach((library: LibraryWithDetails) => {
      // @ts-expect-error: The $values property does not exist on type 'unknown'.
      library.libraryVersions = library.libraryVersions.$values;
    });

    return data;
  }

  async getById(id: number) {
    const { data } = await client.get<LibraryWithDetails>(`/libraries/${id}`);

    // @ts-expect-error: The $values property does not exist on type 'unknown'.
    data.libraryVersions = data.libraryVersions.$values;
    return data;
  }

  async create(formData: FormData) {
    const { data } = await client.post(
      '/libraries',
      formData,
      getAuthorizationHeader(),
    );
    return data;
  }
}

export default new LibraryAPI();
