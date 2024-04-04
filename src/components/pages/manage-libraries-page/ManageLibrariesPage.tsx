import { useEffect, useState } from 'react';
import { Box, Card } from '@mui/material';
import Typography from '@mui/material/Typography';

import LibraryCard from '@/components/pages/manage-libraries-page/components/library-card';
import LibraryAPI from '@/lib/api/library/LibraryAPI';
import { LibraryWithDetails } from '@/types/library';

import EditLibraryModal from './components/edit-library-modal';

const ManageLibrariesPage = () => {
  const [libraries, setLibraries] = useState<LibraryWithDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentLibrary, setCurrentLibrary] =
    useState<LibraryWithDetails | null>(null);

  const handleEditClick = (library: LibraryWithDetails) => {
    setCurrentLibrary(library);
    setIsEditModalOpen(true);
  };

  const fetchLibraries = async () => {
    setIsLoading(true);
    try {
      const userLibraries = await LibraryAPI.getCurrentUserLibraries();
      setLibraries(userLibraries);
      setError(null);
    } catch (err) {
      setError('Failed to fetch libraries');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLibraryUpdate = () => {
    fetchLibraries(); // Refresh the list of libraries
  };

  useEffect(() => {
    fetchLibraries();
  }, []);

  return (
    <>
      {libraries.length ? (
        <Box sx={{ maxWidth: '450px', width: '100%', display: 'flex' }}>
          {libraries.map(library => (
            <LibraryCard
              key={library.id}
              library={library}
              onEdit={() => handleEditClick(library)}
            />
          ))}
          <EditLibraryModal
            currentLibrary={currentLibrary!}
            isEditModalOpen={isEditModalOpen}
            setIsEditModalOpen={setIsEditModalOpen}
            onLibraryUpdate={handleLibraryUpdate}
          />
        </Box>
      ) : (
        <Card sx={{ margin: '30px', padding: '30px' }}>
          <Typography>Libraries not found</Typography>
        </Card>
      )}
    </>
  );
};

export default ManageLibrariesPage;
