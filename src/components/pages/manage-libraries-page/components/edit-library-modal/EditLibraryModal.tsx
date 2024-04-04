import { FC } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';

import useToast from '@/hooks/use-toast';
import { client } from '@/lib/api/instance';
import { getAuthorizationHeader } from '@/lib/api/utils';
import { LibraryWithDetails } from '@/types/library';

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

export interface EditLibraryModalProps {
  isEditModalOpen: boolean;
  setIsEditModalOpen: (isOpen: boolean) => void;
  currentLibrary: LibraryWithDetails;
  onLibraryUpdate: () => void;
}

const EditLibraryModal: FC<EditLibraryModalProps> = ({
  isEditModalOpen,
  setIsEditModalOpen,
  currentLibrary,
  onLibraryUpdate,
}) => {
  const toast = useToast();

  const onSubmit = async values => {
    const formData = new FormData();
    formData.append('Id', values.id);
    formData.append('ShortDescription', values.shortDescription);
    formData.append('Tags', values.tags);
    formData.append('ProjectWebsiteURL', values.projectWebsiteURL);

    if (values.logo) {
      formData.append('Logo', values.logo);
    }

    try {
      await client.put(`/libraries`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...getAuthorizationHeader().headers,
        },
      });

      toast.success('Library updated successfully', '', 4000);

      onLibraryUpdate();
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
          Edit Library
        </Typography>
        <Formik
          initialValues={{
            id: currentLibrary?.id || 0,
            shortDescription: currentLibrary?.shortDescription || '',
            tags: currentLibrary?.tags || '',
            projectWebsiteURL: currentLibrary?.projectWebsiteURL || '',
            logo: null,
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
                name="shortDescription"
                label="Short Description"
                fullWidth
                margin="normal"
              />
              <Field
                as={TextField}
                name="tags"
                label="Tags"
                fullWidth
                margin="normal"
              />
              <Field
                as={TextField}
                name="projectWebsiteURL"
                label="Project Website URL"
                fullWidth
                margin="normal"
              />
              <input
                id="logo"
                name="logo"
                type="file"
                onChange={event => {
                  setFieldValue('logo', event.currentTarget.files![0]);
                }}
                style={{ margin: '20px 0' }}
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

export default EditLibraryModal;
