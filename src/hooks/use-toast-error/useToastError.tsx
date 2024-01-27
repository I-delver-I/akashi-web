import { AxiosError } from 'axios';

import useToast from '@/hooks/use-toast';
import getErrorMessage from '@/lib/utils/getErrorMessage';

type ErrorFromBackend = {
  error: string;
  messages: string[];
  status: number;
  timestamp: string;
};

const ErrorMapper: Record<string, string> = {
  NoPermissionException: 'You have not enough right for this action',
  UnauthorizedException: 'You are not authorized, authorize',
  InvalidBodyException: 'Invalid data',
};

export const useToastError = () => {
  const toast = useToast();

  const displayError = (_e: unknown) => {
    const errorMessage = getErrorMessage(_e);
    toast.error('Error occurred', `${errorMessage}`, 4000);
  };

  return { displayError };
};
