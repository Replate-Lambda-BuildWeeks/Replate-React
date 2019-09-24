import React, { useState, useEffect, useContext } from "react";
import { withFormik, Form, Field } from "formik";
import UserContext from "../../contexts/UserContext";
// import axios from "axios";


const ModifyPickupForm = props => {

    const id = props.match.params.id;

    const [locations, setLocations] = useState([]);
  
    const { appToEdit } = useContext(UserContext)

    // useEffect(() => {
    //     axios
    //       .get("")
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
                <h1 className='pickup-form__header'>Modify Your Pickup</h1>
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

export default ModifyPickupForm;