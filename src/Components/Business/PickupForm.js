import React , { useState, useEffect, useContext } from "react";
import { withFormik, Form, Field, } from "formik";
import * as Yup from 'yup';

// import axios from "axios";

const PickupForm = props => {

    

    const id = props.match.params.id;
    const { status } = props;
    const [locations, setLocations] = useState([]);
  

    // useEffect(() => {
    //     axios
    //       .get()
    //       .then(res => {
    //         console.log(res.data);
    //         setLocations(res.data);
    //       })
    //       .catch(err => console.log(err));
    //   }, []);

    

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
                <button type='submit'>Submit</button> 
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
        name: Yup.string().required(),
		date: Yup.string().required(),
        time: Yup.string().required(),
        amount: Yup.string().required(),
        quantity: Yup.string().required(),
        type: Yup.string().required(),
	}),
})(PickupForm)

export default FormikPickupForm;