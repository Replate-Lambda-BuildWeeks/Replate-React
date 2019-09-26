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
        
        
                <Field className='pickup-form__field' type='text'  name='date' placeholder='Enter date' />
        
                <Field className='pickup-form__field' type='text' name='time' placeholder='Enter time' />
        
                <Field className='pickup-form__field' type='text' name='amount' placeholder='Enter amount' />
            
                <Field className='pickup-form__field' type='text' name='type' placeholder='Enter type of food' />

                </div>
                <button className='pickup-form__submit' type='submit'>Submit</button> 
                 </div> 

            </Form>
        </div>
    )
}
const FormikPickupForm = withFormik({
    mapPropsToValues({ date, time, amount, type }) {
        return {
            date: date || '',
            time: time || '',
            amount: amount || '',
            type: type || ''
        }
    },
    validationSchema : Yup.object().shape({
		date: Yup.string().required(),
        time: Yup.string().required(),
        amount: Yup.string().required(),

        type: Yup.string().required(),
    }),
    handleSubmit: (value, {props}) => {
        props.onsubmit(value);
    }
})(PickupForm)

export default FormikPickupForm;