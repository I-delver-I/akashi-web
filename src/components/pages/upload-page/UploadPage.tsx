import { ChangeEvent, DragEvent, FC, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button-mui';
import { ButtonSize } from '@/components/common/ui/button-mui/types';
import { handleFileSelect } from '@/components/pages/upload-page/utils/handleFileSelect';
import useToast from '@/hooks/use-toast';
import { useToastError } from '@/hooks/use-toast-error/useToastError';
import libraryAPI from '@/lib/api/library/LibraryAPI';

import * as styles from './UploadPage.styles';

const UploadPage: FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const toast = useToast();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [logoURL, setLogoURL] = useState('');
  const router = useRouter();
  const toastError = useToastError();

  const handleSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('logo', file);

      try {
        await libraryAPI.addLogo(formData);
        toast.success('Logo successfully added!', '', 1000);
        setTimeout(() => {
          router.reload();
        }, 1000);
      } catch (error) {
        toastError.displayError(error);
      }
    }
  };

  const handleDragEnter = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
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
    <Box>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        <Form>
          <Box
            sx={styles.wrapper(isDragging)}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={event => event.preventDefault()}
            onDrop={handleDropOrFileChange}
          >
            <Typography variant="h6Bold">Перетягни сюди</Typography>
            <Typography variant="body2Medium">або</Typography>
            <Button
              type={'submit'}
              text={'Choose file'}
              size={ButtonSize.MEDIUM}
              sx={styles.button}
              onClick={openFileInput}
            />
            <input
              accept=".png, .jpg, .jpeg, .webp"
              type="file"
              style={styles.input}
              onChange={handleDropOrFileChange}
            />
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default UploadPage;
