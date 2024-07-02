import { Dispatch, SetStateAction } from 'react';

import { isValidArchiveFile } from '@/components/pages/upload-page/utils/isValidArchiveFile';
import { UseToastReturn } from '@/hooks/use-toast/types';

export const handleFileSelect = (
  file: File,
  toast: UseToastReturn,
  setFile: Dispatch<SetStateAction<File | null>>,
  setLogoURL: Dispatch<SetStateAction<string>>,
) => {
  if (!isValidArchiveFile(file)) {
    toast.error(
      'Invalid file extension',
      'Supported file extensions: .zip, .rar, .tar, .gzip, .7z',
      4000,
    );
    return;
  }

  // if (file.size > 1.5 * 1024 * 1024) {
  //   toast.error('Розмір файлу не повинен бути більше 1.5 МБ', '', 4000);
  //   return;
  // }

  const reader = new FileReader();
  reader.onload = (event: ProgressEvent<FileReader>) => {
    if (event.target) {
      const result = event.target.result;
      if (typeof result === 'string') {
        setLogoURL(result);
      }
    }
  };
  reader.readAsDataURL(file);

  setFile(file);
};
