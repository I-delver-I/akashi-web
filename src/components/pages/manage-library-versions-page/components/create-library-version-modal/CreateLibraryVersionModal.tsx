import { FC } from 'react';

import { LibraryVersion } from '@/types/libraryVersion';
import { client } from "@/lib/api/instance";
import { getAuthorizationHeader } from "@/lib/api/utils";
import useToast from "@/hooks/use-toast";

export interface CreateLibraryVersionModalProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (isOpen: boolean) => void;
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const CreateLibraryVersionModal: FC<CreateLibraryVersionModalProps> = ({
  setIsCreateModalOpen,
  isCreateModalOpen,
}) => {
  const toast = useToast();

  const onSubmit = async values => {
    const formData = new FormData();
    formData.append('Name', values.name);
    formData.append('LibraryId', values.libraryId);
    formData.append('LibraryVersionArchive', values.libraryVersionArchive);

    try {
      await client.put(`/libraryVersions`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...getAuthorizationHeader().headers,
        },
      });

      toast.success('Library updated successfully', '', 4000);
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error('Failed to update library', error);
    }
  };

  return (

  );
};

export default CreateLibraryVersionModal;
