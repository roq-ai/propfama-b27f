import * as yup from 'yup';

export const datasetValidationSchema = yup.object().shape({
  name: yup.string().required(),
  source: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
