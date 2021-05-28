import Subheading from './Subheading';
import Button from './Button';
import X from '../img/x.png';
import { useState } from 'react';
import { Formik, Form } from 'formik'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../utils/schemas';
import PropTypes from 'prop-types';

const ContactModal = (props) => {

    const { onChildClick } = props;
    const [submitted, setSubmitted] = useState(false);

    const { form } = useForm({
        resolver: yupResolver(contactSchema),
    });

    return (
        <div className="popup">
            <div className=" card popup__card">
                <img className="img--xs" src={X} alt="cancel" onClick={onChildClick}></img>
                {submitted ? <Subheading small center green nomarg title="Vi svarer på din henvendelse inne 1-2 virkedager" /> :
                    <>
                        <Subheading small center grey title="Fyll ut skjema så svarer vi deg straks" />
                        <Formik
                            initialValues={{ name: "", email: "", subject: "", message: "" }}
                            validationSchema={contactSchema}
                            onSubmit={(data) => {
                                setSubmitted(true);
                                console.log(data);
                            }}
                        >
                            {({ values,
                                errors, handleChange }) => (
                                <Form>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        ref={form}
                                        onChange={handleChange}
                                        value={values.name}
                                        className=" form__input form__input--border"
                                        placeholder="Skriv ditt navn"
                                    />
                                    <p className="form__error">{errors.name}</p>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        ref={form}
                                        onChange={handleChange}
                                        value={values.email}
                                        className=" form__input form__input--border"
                                        placeholder="Skriv din e-mail"
                                    />
                                    <p className="form__error">{errors.email}</p>

                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        ref={form}
                                        onChange={handleChange}
                                        value={values.subject}
                                        className=" form__input form__input--border"
                                        placeholder="Skriv ditt emne"
                                    />
                                    <p className="form__error">{errors.subject}</p>

                                    <textarea
                                        type="text"
                                        id="message"
                                        name="message"
                                        ref={form}
                                        rows="2"
                                        onChange={handleChange}
                                        value={values.message}
                                        className=" form__input form__input--border"
                                        placeholder="Skriv din melding"
                                    ></textarea>
                                    <p className="form__error">{errors.message}</p>

                                    <Button title="Send" center type="submit" />
                                </Form>
                            )}
                        </Formik>

                    </>
                }
            </div>
        </div>
    );
}

export default ContactModal;

ContactModal.propTypes = {
    onChildClick: PropTypes.func
};