import React, { useState, useEffect, useContext } from 'react';
import { Form, Field, withFormik } from 'formik';
// import axios from 'axios';
import * as Yup from 'yup';


const LocationForm = props => {

    const { status } = props;

    const id = props.match.params.id;

    const { errors, touched } = props;

    useEffect(() => {
        status && setLocations(locations => [...locations, status])
    }, [status])

    return(
        <div className='new-pickup__modal'>
            <Form className='pickup-form'>
                <div className='form-content'>
                <h1 className='pickup-form__header'>Add a new location</h1>
            <div className='pickup-form__fields'>

            <>
                <Field className='pickup-form__field' name='address' type='text' placeholder='Enter address' />
            {touched.address && errors.address && <p className="error">{errors.address}</p>}
            </>

            <>
                <Field className='pickup-form__field' name='city' type='text' placeholder='Enter city' />
            {touched.city && errors.city && <p className="error">{errors.city}</p>}
            </>

            <>
                <Field className='pickup-form__field' name='state' type='text' placeholder='Enter state' />
            {touched.state && errors.state && <p className="error">{errors.state}</p>}
            </>
            <>
                <Field className='pickup-form__field' name='zip' type='text' placeholder='Enter zip code' />
            {touched.zip && errors.zip && <p className="error">{errors.zip}</p>}
            </>

            </div>
            <button className='pickup-form__submit' type='submit'>Submit</button>
            </div>
            </Form>

        </div>
    )
}

const FormikLocationForm = withFormik({
    mapPropsToValues({ address, city, state, zip, id }) {
        return {
            address: address || '',
            city: city || '',
            state: state || '',
            zip: zip || '',
            business_id: id || ''
        }
    },
        validationSchema : Yup.object().shape({
        address: Yup.string().required(),
        city: Yup.string().required(),
        state: Yup.string().required(),
        zip: Yup.string().required(),
    }),
    
})(LocationForm)

export default FormikLocationForm;