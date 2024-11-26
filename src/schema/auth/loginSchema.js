import * as Yup from 'yup';

export const loginSchema = Yup.object({
    firstName: Yup.string().required('FirstName should not be empty'),
    lastName:  Yup.string().required('LastName should not be empty'),
    email: Yup.string().email('Invalid email address').required('Email Should not be empty')
})
