import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';




const PickupForm = props => {

    return(
        <div className='new-pickup__modal'>
            <Form className='pickup-form'>
                <div className='form-content'>
                <h1 className='pickup-form__header'>Schedule A Pickup</h1>
                <div className='pickup-form__fields'>
        
                <Field type='text' name='name' placeholder='Enter name' />
        
                <Field type='text'  name='date' placeholder='Enter date' />
        
                <Field type='text' name='time' placeholder='Enter time' />
        
                <Field type='text' name='amount' placeholder='Enter amount' />
            
                <Field type='text' name='type' placeholder='Enter type of food' />

                </div>
                <button type='submit'>Update</button>
                </div>

            </Form>
        </div>
    )
}
const FormikPickupForm = withFormik({
    mapPropsToValues({ name, date, time, amount, type }) {
        return {
            name: name || '',
            date: date || '',
            time: time || '',
            amount: amount || '',
            type: type || ''
        }
    },
    validationSchema : Yup.object().shape({
        name: Yup.string().required('You cannot pass!!!'),
		date: Yup.string().required('You cannot pass!!!'),
        time: Yup.string().required('Cannot pass'),
        amount: Yup.string().required('You cannot pass!!!'),
        quantity: Yup.string().required('You cannot pass!!!'),
        type: Yup.string().required('You cannot pass!!!'),
	}),
})(PickupForm)

export default PickupForm;