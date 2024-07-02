import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required(`Required field`)
    .min(2, 'No shorter than 2 symbols')
    .max(40, 'No bigger than 40 symbols')
    .matches(/^\w+$/, 'Hast to contain latin numbers, letters or _ sign'),
  email: yup.string().required(`Required field`).email('It is not like email'),
  password: yup
    .string()
    .required(`Required field`)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[\w\W]+$/,
      'Minimum one latin letter and one number',
    ),
  passwordConfirmation: yup
    .string()
    .nullable()
    .oneOf([yup.ref('password'), null], 'Passwords are not the same')
    .required(`Required field`),
  agreement: yup.boolean().isTrue(''),
});
