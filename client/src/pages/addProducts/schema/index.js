import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    img: Yup.string()
      .min(2, 'Too Short!')
      .max(450, 'Too Long!')
      .required('Required'),
      type: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      price: Yup.number()
      .min(2, 'Too Short!')
      .max(1855, 'Too Long!')
      .required('Required'),
  });