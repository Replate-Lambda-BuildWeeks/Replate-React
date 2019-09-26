import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// function validatePhone(value){
//     let error;
//     if(!value) {
//         error="Required field";
//     } else if (!/^[2-9]\d{2}-\d{3}-\d{4}$/i.test(value)) {
//         error="Enter phone in the following format: xxx-xxx-xxxx";
//     }
//     return error;
// }

const VolOnboardForm = ({ values, errors, status, validateForm }) => {
  const [volunteer, setVolunteer] = useState([]);

  //sets
  useEffect(() => {
    if (status) {
      setVolunteer([...volunteer, status]);
    }
  }, [volunteer, status]);

  return (
    <div>
      <Form>
        <h2>Create Volunteer Account</h2>
        <div>
          <div>
            <label>First Name</label>
            <Field type="text" name="firstName" />
            {errors.firstName && <p className="errors">{errors.firstName}</p>}
          </div>
          <div>
            <label>Last Name</label>
            <Field type="text" name="lastName" />
            {errors.lastName && <p className="errors">{errors.lastName}</p>}
          </div>
          <div>
            <label>Phone</label>
            <Field
              type="text"
              name="phone"
              placeholder="xxx-xxx-xxxx"
              //   validate={validatePhone}
            />
            {errors.phone && <p className="errors">{errors.phone}</p>}
          </div>
          <div>
            <label>Email</label>
            <Field type="email" name="email" />
            {errors.email && <p className="errors">{errors.email}</p>}
          </div>
          <div>
            <label>Password</label>
            <Field type="password" name="password" />
            {errors.password && <p className="errors">{errors.password}</p>}
          </div>
          <div>
            <label>Confirm Password</label>
            <Field type="password" name="confirmPassword" />
            {errors.confirmPassword && (
              <p className="errors">{errors.confirmPassword}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          onClick={() => validateForm().then(() => console.log('blah'))}
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

const FormikVolOnboardForm = withFormik({
  mapPropsToValues({
    firstName,
    lastName,
    phone,
    email,
    password,
    confirmPassword
  }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      phone: phone || '',
      email: email || '',
      password: password || '',
      confirmPassword: confirmPassword || ''
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('*Required field'),
    lastName: Yup.string().required('*Required field'),
    phone: Yup.string().required('*Required field'),
    email: Yup.string()
      .email('Invalid email')
      .required('*Required field'),
    password: Yup.string().required('*Required field'),
    confirmPassword: Yup.string().required('*Required field')
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post('http://0bbfee1e.ngrok.io/auth/login', values)
      .then(res => {
        setStatus(res.data);
        console.log('VolOnboardForm POST request success:', res);
      })
      .catch(err => console.log(err.res));
  }
})(VolOnboardForm);

export default FormikVolOnboardForm;
