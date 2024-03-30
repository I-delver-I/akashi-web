import { FC, SyntheticEvent, useState } from 'react';
import { Box, Card, Tab, Tabs, Typography } from '@mui/material';

import { Framework } from '@/types/framework';

export interface FrameworksTableProps {
  frameworks: Framework[];
}

const groupFrameworksByProductName = (frameworks: Framework[]) => {
  const grouped = frameworks.reduce(
    (acc, framework) => {
      acc[framework.productName] = acc[framework.productName] || [];
      acc[framework.productName].push(framework.versionName);
      return acc;
    },
    {} as Record<string, string[]>,
  );

  Object.keys(grouped).forEach(key => {
    grouped[key] = sortVersionsDesc(grouped[key]);
  });

  return grouped;
};

const sortVersionsDesc = (versions: string[]) => {
  return versions.sort((a, b) => {
    // Extract numerical parts for comparison
    const aNum = parseFloat(a.match(/\d+\.\d+|\d+/g)?.join('.') || '0');
    const bNum = parseFloat(b.match(/\d+\.\d+|\d+/g)?.join('.') || '0');
    return bNum - aNum; // sort in descending order
  });
};

const FrameworksTable: FC<FrameworksTableProps> = ({ frameworks }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const groupedFrameworks = groupFrameworksByProductName(frameworks);
  const productNames = Object.keys(groupedFrameworks);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {productNames.map((productName, index) => (
          <Tab label={productName} key={index} />
        ))}
      </Tabs>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: 2 }}>
        {groupedFrameworks[productNames[selectedTab]]?.map((version, index) => (
          <Card
            key={index}
            sx={{ padding: 1, minWidth: 100, textAlign: 'center' }}
          >
            <Typography variant="body2">{version}</Typography>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default FrameworksTable;
