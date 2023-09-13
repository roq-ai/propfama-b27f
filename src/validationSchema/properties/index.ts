import * as yup from 'yup';

export const propertyValidationSchema = yup.object().shape({
  address: yup.string().required(),
  price: yup.number().integer().required(),
  bedrooms: yup.number().integer().required(),
  bathrooms: yup.number().integer().required(),
  sqft: yup.number().integer().required(),
  organization_id: yup.string().nullable().required(),
});
