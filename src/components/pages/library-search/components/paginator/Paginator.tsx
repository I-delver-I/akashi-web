import { FC } from 'react';
import { Pagination } from '@mui/material';

type PaginationProps = {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
};

const Paginator: FC<PaginationProps> = ({
  currentPage,
  pageSize,
  totalCount,
  onPageChange,
}) => {
  const pageCount = Math.ceil(totalCount / pageSize);

  return (
    <Pagination
      count={pageCount}
      page={currentPage}
      onChange={(event, page) => onPageChange(page)}
    />
  );
};

export default Paginator;
