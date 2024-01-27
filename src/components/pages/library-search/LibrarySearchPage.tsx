import * as React from 'react';
import { FC, useState } from 'react';
import { Box, Card, CardContent, ListItem, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Breakpoint } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';

import FrameworkFilter, {
  FilterFrameworkProductNames,
} from '@/components/pages/library-search/components/framework-filter/FrameworkFilter';
import Paginator from '@/components/pages/library-search/components/paginator/Paginator';
import Searchbar from '@/components/pages/library-search/components/searchbar/Searchbar';
import SortDropdown, {
  OrderBy,
} from '@/components/pages/library-search/components/sort-dropdown/SortDropdown';
import LibraryAPI from '@/lib/api/library/LibraryAPI';
import { Library } from '@/types/library';

import * as styles from './LibrarySearchPage.styles';

export interface LibrarySearchPageProps {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  libraries: Library[];
}

const LibrarySearchPage: FC<LibrarySearchPageProps> = ({
  currentPage: initialPage,
  pageSize,
  libraries,
  totalCount,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down('lg' as Breakpoint));
  const [searchResults, setSearchResults] = useState<Library[]>(libraries);
  const [filter, setFilter] = useState<FilterFrameworkProductNames>({
    dotNet: false,
    dotNetCore: false,
    dotNetStandard: false,
    dotNetFramework: false,
  });
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
    const { items } = await LibraryAPI.get(
      filter,
      undefined,
      undefined,
      page,
      pageSize,
    );
    setSearchResults(items);
  };

  const onApplyFilters = (filterValues: FilterFrameworkProductNames) => {
    setFilter(filterValues);
    fetchLibraries(filterValues);
  };

  const fetchLibraries = async (filters: FilterFrameworkProductNames) => {
    const { items } = await LibraryAPI.get(
      filters,
      undefined,
      undefined,
      currentPage,
      pageSize,
    );
    setSearchResults(items);
  };

  const handleSortChange = (value: string) => {
    let sortedResults;
    if (value === OrderBy.Downloads) {
      sortedResults = [...searchResults].sort(
        (a, b) => b.downloadsCount - a.downloadsCount,
      );
    } else if (value === OrderBy.LastUpdated) {
      sortedResults = [...searchResults].sort(
        (a, b) =>
          new Date(b.lastUpdateTime).getTime() -
          new Date(a.lastUpdateTime).getTime(),
      );
    } else {
      // Default sorting or handle other cases
      sortedResults = [...searchResults];
    }
    setSearchResults(sortedResults);
  };

  const makeTextWrapByDots = (inputText: string) => {
    return inputText.replace(/\./g, '.\u200B');
  };

  const extractDateFromDateTime = (datetime: Date) => {
    return datetime.toString().split('T')[0];
  };

  const onSearchSubmit = async (searchTerm: string) => {
    const { items } = await LibraryAPI.get(
      filter,
      undefined,
      searchTerm,
      currentPage,
      pageSize,
    );
    // @ts-ignore
    const { $values: libraries } = items;
    setSearchResults(libraries);
  };

  return (
    <Container sx={styles.layout}>
      <Searchbar
        onSubmit={onSearchSubmit}
        inputProps={{ placeholder: 'Enter search term' }}
      />
      <Box
        margin="15px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap="30px"
      >
        <FrameworkFilter onApplyFilters={onApplyFilters} />
        <SortDropdown onSortChange={handleSortChange} />
      </Box>

      {searchResults.map((library, index) => (
        <ListItem key={index} divider>
          <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent
              sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}
            >
              {!isDesktop && (
                <Image
                  src={library.logoURL}
                  alt="library logo"
                  width={50}
                  height={50}
                />
              )}
              <Box>
                <Box display="flex" columnGap="10px" flexWrap="wrap">
                  <Link href={`/libraries/${library.id}`}>
                    <Typography variant="h6">
                      {makeTextWrapByDots(library.name)}
                    </Typography>
                  </Link>
                  <Typography color="textSecondary">
                    dev: {library.user.username}
                  </Typography>
                </Box>
                <Box display="flex" columnGap="20px" flexWrap="wrap">
                  <Typography>
                    {library.downloadsCount} total downloads
                  </Typography>
                  <Typography>
                    last updated{' '}
                    {extractDateFromDateTime(library.lastUpdateTime)}
                  </Typography>
                  <Typography>Latest version: {}</Typography>
                </Box>
                {library.tags && (
                  <Typography color="textSecondary">
                    tags: {library.tags}
                  </Typography>
                )}
                <Typography color="textSecondary">
                  {library.shortDescription}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </ListItem>
      ))}
      <Paginator
        currentPage={currentPage}
        pageSize={pageSize}
        totalCount={totalCount}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default LibrarySearchPage;
