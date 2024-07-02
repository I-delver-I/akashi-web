import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import FrameworksTable from '@/components/pages/library-page/components/tables/FrameworksTable';
import VersionsTable from '@/components/pages/library-page/components/tables/VersionsTable';
import { LibraryWithDetails } from '@/types/library';
import { LibraryVersionWithDetails } from '@/types/libraryVersion';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface BasicTabsProps {
  currentLibraryVersion: LibraryVersionWithDetails;
  library: LibraryWithDetails;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: '30px' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  library,
  currentLibraryVersion,
}: BasicTabsProps) {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={(_event, newValue) => setValue(newValue)}
          aria-label="scrollable auto basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            borderRight: '3px solid green',
            borderLeft: '3px solid green',
            borderBottom: '1px solid green',
          }}
        >
          {['README', 'Versions', 'Frameworks'].map((label, index) => (
            <Tab
              key={index}
              label={label}
              {...a11yProps(index)}
              sx={{ textTransform: 'none' }}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {currentLibraryVersion.usageContent}
        </pre>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <VersionsTable library={library} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <FrameworksTable
          frameworks={currentLibraryVersion.libraryVersionSupportedFrameworks.map(
            f => f.framework,
          )}
        />
      </CustomTabPanel>
      {/*<CustomTabPanel value={value} index={3}>*/}
      {/*  <DependenciesList*/}
      {/*    dependencies={currentLibraryVersion.libraryVersionDependencies}*/}
      {/*  />*/}
      {/*</CustomTabPanel>*/}
    </>
  );
}
