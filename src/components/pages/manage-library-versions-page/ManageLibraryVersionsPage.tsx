import { FC, useState } from 'react';
import { Box } from '@mui/material';

import EditLibraryVersionModal from '@/components/pages/manage-library-versions-page/components/edit-library-version-modal/EditLibraryVersionModal';
import LibraryVersionCard from '@/components/pages/manage-library-versions-page/components/library-version-card';
import { LibraryVersion } from '@/types/libraryVersion';
import CreateLibraryVersionModal
  from "@/components/pages/manage-library-versions-page/components/create-library-version-modal/CreateLibraryVersionModal";

export interface ManageLibraryVersionsPageProps {
  libraryVersions: LibraryVersion[];
}

const ManageLibraryVersionsPage: FC<ManageLibraryVersionsPageProps> = ({
  libraryVersions,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentLibraryVersion, setCurrentLibraryVersion] =
    useState<LibraryVersion | null>(null);

  const [isNewVersionModalOpen, setIsNewVersionModalOpen] = useState(false);

  const handleEditClick = (libraryVersion: LibraryVersion) => {
    setCurrentLibraryVersion(libraryVersion);
    setIsEditModalOpen(true);
  };

  const handleAddNewVersionClick = () => {
    // Your logic here, like setting state to open a modal
    setIsNewVersionModalOpen(true);
  };

  return (
    <Box sx={{ maxWidth: '450px', width: '100%', display: 'flex' }}>
      {libraryVersions.map((libraryVersion, index) => (
        <LibraryVersionCard
          key={index}
          libraryVersion={libraryVersion}
          onEdit={() => handleEditClick(libraryVersion)}
        />
      ))}
      <EditLibraryVersionModal
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        currentLibraryVersion={currentLibraryVersion!}
        // onLibraryVersionUpdate={handleLibraryUpdate}
      />
      {/*<CreateLibraryVersionModal isCreateModalOpen={} setIsCreateModalOpen={} />*/}
    </Box>
  );
};

export default ManageLibraryVersionsPage;
