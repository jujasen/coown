import * as yup from 'yup';

export const contactSchema = yup.object().shape({
    name: yup.string()
        .required("*Name is required")
        .min(2, "*Name needs at least 2 characters"),
    email: yup.string()
        .email("*Email is invalid")
        .required("*Email is required"),
    subject: yup.string()
        .required("*Subject is required")
        .min(2, "*Subject needs at least 2 characters"),
    message: yup.string()
        .required("*Message is required")
        .min(10, "*Message needs at least 10 characters"),
});

export const orderSchema = yup.object().shape({
    email: yup.string()
        .email("*Email is invalid")
        .required("*Email is required"),
});

