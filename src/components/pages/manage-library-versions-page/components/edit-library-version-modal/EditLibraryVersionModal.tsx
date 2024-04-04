import { FC } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';

import useToast from '@/hooks/use-toast';
import { client } from '@/lib/api/instance';
import { getAuthorizationHeader } from '@/lib/api/utils';
import { LibraryVersion } from '@/types/libraryVersion';

export interface EditLibraryVersionModalProps {
  isEditModalOpen: boolean;
  setIsEditModalOpen: (isOpen: boolean) => void;
  currentLibraryVersion: LibraryVersion;
  // onLibraryVersionUpdate: () => void;
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

const EditLibraryVersionModal: FC<EditLibraryVersionModalProps> = ({
  // onLibraryVersionUpdate,
  isEditModalOpen,
  setIsEditModalOpen,
  currentLibraryVersion,
}) => {
  const toast = useToast();

  const onSubmit = async values => {
    const formData = new FormData();
    formData.append('Id', values.id);
    formData.append('UsageContent', values.usageContent);
    formData.append('SourceRepositoryUrl', values.sourceRepositoryUrl);
    formData.append('LicenseUrl', values.licenseUrl);

    try {
      await client.put(`/libraryVersions`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...getAuthorizationHeader().headers,
        },
      });

      toast.success('Library updated successfully', '', 4000);

      // onLibraryVersionUpdate();
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Failed to update library', error);
    }
  };

  return (
    <Modal
      open={isEditModalOpen}
      onClose={() => setIsEditModalOpen(false)}
      aria-labelledby="edit-library-modal-title"
    >
      <Box sx={modalStyle}>
        <Typography id="edit-library-modal-title" variant="h6" component="h2">
          Edit Library version
        </Typography>
        <Formik
          initialValues={{
            id: currentLibraryVersion?.id || 0,
            usageContent: currentLibraryVersion?.usageContent || '',
            sourceRepositoryUrl:
              currentLibraryVersion?.sourceRepositoryUrl || '',
            licenseUrl: currentLibraryVersion?.licenseUrl || '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values).finally(() => {
              setSubmitting(false);
              setIsEditModalOpen(false);
            });
          }}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                name="usageContent"
                label="Usage Content"
                fullWidth
                margin="normal"
              />
              <Field
                as={TextField}
                name="sourceRepositoryUrl"
                label="Source Repository"
                fullWidth
                margin="normal"
              />
              <Field
                as={TextField}
                name="licenseUrl"
                label="License"
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Save Changes
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default EditLibraryVersionModal;
