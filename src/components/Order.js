import Subheading from './Subheading';
import Button from './Button';
import X from '../img/x.png';
import { useState } from 'react';
import { Formik, Form } from 'formik'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderSchema } from '../utils/schemas';

const Order = (props) => {

    const { onChildClick } = props;
    const [submitted, setSubmitted] = useState(false);

    const { form } = useForm({
        resolver: yupResolver(orderSchema),
    });

    return (
        <div className="popup">
            <div className=" card popup__card">
                <img className="img--xs" src={X} alt="cancel" onClick={onChildClick}></img>
                {submitted ? <Subheading small center green nomarg title="Du vil få tilsendt salgsoppgaven straks" /> :
                    <>
                        <Subheading small center grey title="Skriv inn din mail for å motta komplett salgsoppgave" />
                        <Formik
                            initialValues={{ email: "" }}
                            validationSchema={orderSchema}
                            onSubmit={(data) => {
                                setSubmitted(true);
                                console.log(data);
                            }}
                        >
                            {({ values,
                                errors, handleChange }) => (
                                <Form>
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
                                    <p className="form__error">{errors.name}</p>
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

export default Order;