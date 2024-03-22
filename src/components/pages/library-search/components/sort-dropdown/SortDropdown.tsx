import React, { FC, useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import * as styles from './SortDropdown.styles';

type SortDropdownProps = {
  onSortChange: (value: SortBy) => void;
};

export enum SortBy {
  Downloads = 'downloads',
  LastUpdated = 'lastUpdated',
}

const SortDropdown: FC<SortDropdownProps> = ({ onSortChange }) => {
  const [sortValue, setSortValue] = useState(SortBy.Downloads);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as SortBy;
    setSortValue(value);
    onSortChange(value);
  };

  return (
    <FormControl>
      <InputLabel id="sort-select-label" sx={styles.inputLabel}>
        Sort By
      </InputLabel>
      <Select
        labelId="sort-select-label"
        id="sort-select"
        value={sortValue}
        label="Sort By"
        onChange={handleChange}
        sx={styles.select}
      >
        <MenuItem value={SortBy.Downloads}>Downloads</MenuItem>
        <MenuItem value={SortBy.LastUpdated}>Recently updated</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortDropdown;
