import { ChangeEvent, FC, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { useRouter } from 'next/router';

type FrameworkFilterProps = {
  onApplyFilters(filter: FilterFrameworkProductNames): void;
};

export type FilterFrameworkProductNames = {
  net: boolean;
  netCore: boolean;
  netStandard: boolean;
  netFramework: boolean;
};

const defaultFilter = {
  net: false,
  netCore: false,
  netStandard: false,
  netFramework: false,
} as FilterFrameworkProductNames;

const FrameworkFilter: FC<FrameworkFilterProps> = ({ onApplyFilters }) => {
  const router = useRouter();

  const queryFrameworks = (router.query.frameworks as string)?.split(',');

  const initialFrameworks = {
    net: queryFrameworks?.includes('net') ?? false,
    netCore: queryFrameworks?.includes('netcoreapp') ?? false,
    netStandard: queryFrameworks?.includes('netstandard') ?? false,
    netFramework: queryFrameworks?.includes('netframework') ?? false,
  } as FilterFrameworkProductNames;

  const [selectedFrameworks, setSelectedFrameworks] =
    useState(initialFrameworks);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedFrameworks({
      ...selectedFrameworks,
      [event.target.name]: event.target.checked,
    });
  };

  const handleResetFilters = () => {
    setSelectedFrameworks(defaultFilter);
    onApplyFilters(defaultFilter);
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedFrameworks.net}
              onChange={handleCheckboxChange}
              name="net"
            />
          }
          label=".NET"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedFrameworks.netCore}
              onChange={handleCheckboxChange}
              name="netCore"
            />
          }
          label=".NET Core"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedFrameworks.netStandard}
              onChange={handleCheckboxChange}
              name="netStandard"
            />
          }
          label=".NET Standard"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedFrameworks.netFramework}
              onChange={handleCheckboxChange}
              name="netFramework"
            />
          }
          label=".NET Framework"
        />
      </FormGroup>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onApplyFilters(selectedFrameworks)}
        >
          Apply
        </Button>
        <Button variant="text" onClick={handleResetFilters}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default FrameworkFilter;
