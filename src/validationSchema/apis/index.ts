import * as yup from 'yup';

export const apiValidationSchema = yup.object().shape({
  name: yup.string().required(),
  url: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
