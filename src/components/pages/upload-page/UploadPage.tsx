import { ChangeEvent, DragEvent, FC, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import LoginButton from '@/components/common/layout/header/components/authentication-buttons/LoginButton';
import Button from '@/components/common/ui/button-mui';
import { ButtonSize } from '@/components/common/ui/button-mui/types';
import { handleFileSelect } from '@/components/pages/upload-page/utils/handleFileSelect';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import { useToastError } from '@/hooks/use-toast-error/useToastError';
import libraryAPI from '@/lib/api/library/LibraryAPI';

import * as styles from './UploadPage.styles';

const UploadPage: FC = () => {
  const { isLoggedIn } = useAuthentication();
  const [isDragging, setIsDragging] = useState(false);
  const toast = useToast();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [, setLogoURL] = useState('');
  const router = useRouter();
  const toastError = useToastError();

  const handleSubmit = async (values: {
    libraryName: string;
    versionName: string;
  }) => {
    if (file) {
      const formData = new FormData();
      console.log('file', file);
      formData.append('InitialVersionArchive', file);
      formData.append('Name', values.libraryName);
      formData.append('InitialVersionName', values.versionName);
      console.log('values', values);
      try {
        await libraryAPI.create(formData);
        toast.success('Library successfully created!', '', 2000);
        setTimeout(() => {
          router.reload();
        }, 1000);
      } catch (error) {
        toastError.displayError(error);
      }
    }
  };
  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDropOrFileChange = (
    event: DragEvent | ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    setIsDragging(false);

    const file =
      'dataTransfer' in event
        ? event.dataTransfer.files[0]
        : event.target.files && event.target.files[0];

    if (file) {
      handleFileSelect(file, toast, setFile, setLogoURL);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isLoggedIn ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4">Upload</Typography>
          <Formik
            initialValues={{ libraryName: '', versionName: '' }}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form>
                <Box sx={styles.wrapper(isDragging)}>
                  <Field
                    as={TextField}
                    name="libraryName"
                    label="Library Name"
                    value={values.libraryName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                  <Field
                    as={TextField}
                    name="versionName"
                    label="Version Name"
                    value={values.versionName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  />
                  <Button
                    text={'Choose file'}
                    size={ButtonSize.MEDIUM}
                    sx={styles.button}
                    onClick={openFileInput}
                  />
                  <Button
                    type={'submit'}
                    text={'Submit'}
                    size={ButtonSize.MEDIUM}
                    sx={styles.button}
                  />
                  <input
                    accept=".zip, .rar, .tar, .gzip, .7z"
                    type="file"
                    style={styles.input}
                    ref={fileInputRef}
                    onChange={handleDropOrFileChange}
                  />
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      ) : (
        <LoginButton />
      )}
    </Box>
  );
};

export default UploadPage;
