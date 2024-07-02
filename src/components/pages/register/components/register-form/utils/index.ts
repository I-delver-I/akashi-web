import { RegisterBody } from '@/lib/api/register/types/RegisterBody';

import { RegisterFormFields } from '../types';

export const transformData = (data: RegisterFormFields): RegisterBody => {
  return {
    username: data.username.trim(),
    email: data.email.toLowerCase().trim(),
    password: data.password.trim(),
  };
};
