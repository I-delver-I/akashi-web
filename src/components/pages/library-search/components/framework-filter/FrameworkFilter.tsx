import { ChangeEvent, FC, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';

type FrameworkFilterProps = {
  onApplyFilters(filterValues: FilterFrameworkProductNames): void;
};

export type FilterFrameworkProductNames = {
  dotNet: boolean;
  dotNetCore: boolean;
  dotNetStandard: boolean;
  dotNetFramework: boolean;
};

const FrameworkFilter: FC<FrameworkFilterProps> = ({ onApplyFilters }) => {
  const [selectedFrameworks, setSelectedFrameworks] = useState({
    dotNet: false,
    dotNetCore: false,
    dotNetStandard: false,
    dotNetFramework: false,
  } as FilterFrameworkProductNames);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedFrameworks({
      ...selectedFrameworks,
      [event.target.name]: event.target.checked,
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(selectedFrameworks);
  };

  const resetFilters = () => {
    setSelectedFrameworks({
      dotNet: false,
      dotNetCore: false,
      dotNetStandard: false,
      dotNetFramework: false,
    });
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedFrameworks.dotNet}
              onChange={handleCheckboxChange}
              name="dotNET"
            />
          }
          label=".NET"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedFrameworks.dotNetCore}
              onChange={handleCheckboxChange}
              name="dotNETCore"
            />
          }
          label=".NET Core"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedFrameworks.dotNetStandard}
              onChange={handleCheckboxChange}
              name="dotNETStandard"
            />
          }
          label=".NET Standard"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedFrameworks.dotNetFramework}
              onChange={handleCheckboxChange}
              name="dotNETFramework"
            />
          }
          label=".NET Framework"
        />
      </FormGroup>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleApplyFilters}
        >
          Apply
        </Button>
        <Button variant="text" onClick={resetFilters}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default FrameworkFilter;
