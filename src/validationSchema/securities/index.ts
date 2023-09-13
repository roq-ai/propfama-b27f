import * as yup from 'yup';

export const securityValidationSchema = yup.object().shape({
  protocol: yup.string().required(),
  encryption: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
