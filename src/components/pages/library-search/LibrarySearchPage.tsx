import * as React from 'react';
import { FC } from 'react';
import { Box, Card, CardContent, ListItem, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Breakpoint } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

import Paginator from '@/components/common/ui/paginator/Paginator';
import FrameworkFilter, {
  FilterFrameworkProductNames,
} from '@/components/pages/library-search/components/framework-filter/FrameworkFilter';
import Searchbar from '@/components/pages/library-search/components/searchbar/Searchbar';
import SortDropdown, {
  SortBy,
} from '@/components/pages/library-search/components/sort-dropdown/SortDropdown';
import { Library } from '@/types/library';

import * as styles from './LibrarySearchPage.styles';

export interface LibrarySearchPageProps {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  libraries: Library[];
}

const LibrarySearchPage: FC<LibrarySearchPageProps> = ({
  currentPage,
  pageSize,
  libraries,
  totalCount,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down('lg' as Breakpoint));

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handlePageChange = async (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page > 1) {
      params.set('page', page.toString());
    } else {
      params.delete('page');
    }

    await router.replace(`${pathname}?${params.toString()}`);
  };

  const handleApplyFilters = async (filter: FilterFrameworkProductNames) => {
    const params = new URLSearchParams(searchParams);
    const frameworks: string[] = [];

    if (filter.net) {
      frameworks.push('net');
    }
    if (filter.netCore) {
      frameworks.push('netcoreapp');
    }
    if (filter.netStandard) {
      frameworks.push('netstandard');
    }
    if (filter.netFramework) {
      frameworks.push('netframework');
    }

    if (frameworks.length > 0) {
      params.set('frameworks', frameworks.join(','));
    } else {
      params.delete('frameworks');
    }

    await router.replace(`${pathname}?${params.toString()}`);
  };

  const handleSortChange = async (sortValue: SortBy) => {
    const params = new URLSearchParams(searchParams);

    if (sortValue) {
      params.set('sortby', sortValue);
    } else {
      params.delete('sortby');
    }

    await router.replace(`${pathname}?${params.toString()}`);
  };

  const onSearchSubmit = async (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }

    await router.replace(`${pathname}?${params.toString()}`);
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
        <FrameworkFilter onApplyFilters={handleApplyFilters} />
        <SortDropdown onSortChange={handleSortChange} />
      </Box>

      {libraries.map((library, index) => (
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
                      {library.name.replace(/\./g, '.\u200B')}
                    </Typography>
                  </Link>
                  <Typography color="textSecondary">
                    dev: {library.user.username}
                  </Typography>
                </Box>
                <Box display="flex" columnGap="20px" flexWrap="wrap">
                  <Typography>
                    {library.downloadsCount.toLocaleString()} total downloads
                  </Typography>
                  <Typography>
                    last updated{' '}
                    {library.lastUpdateTime.toString().split('T')[0]}
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
