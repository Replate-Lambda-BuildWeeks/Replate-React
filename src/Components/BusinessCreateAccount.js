import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import * as Yup from 'yup';
import axios from 'axios';

const BusOnboardForm = ({
  values,
  errors,
  status,
  validateForm,
  FormikBag
}) => {
  const [business, setBusiness] = useState([]);

  //sets
  useEffect(() => {
    if (status) {
      setBusiness([...business, status]);
    }
  }, [business, status]);

  return (
    <div>
      <Form>
        <h2>Create Business Account</h2>
        <div>
          <div>
            <div>
              <label>Business Name</label>
              <Field type="text" name="restaurant_name" />
              {errors.restaurant_name && (
                <p className="errors">{errors.restaurant_name}</p>
              )}
            </div>
          </div>
          <div>
            <label>Contact Name</label>
            <Field type="text" name="contact_name" />
            {errors.contact_name && (
              <p className="errors">{errors.contact_name}</p>
            )}
          </div>
          <div>
            <label>Street Address</label>
            <Field type="text" name="address" />
            {errors.address && <p className="errors">{errors.address}</p>}
          </div>
          <div>
            <label>City</label>
            <Field type="text" name="city" />
            {errors.city && <p className="errors">{errors.city}</p>}
          </div>
          <div>
            <label>Zip</label>
            <Field type="text" name="zip" />
            {errors.zip && <p className="errors">{errors.zip}</p>}
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
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikBusOnboardForm = withFormik({
  mapPropsToValues({
    restaurant_name,
    contact_name,
    address,
    city,
    zip,
    phone,
    email,
    password
  }) {
    return {
      restaurant_name: restaurant_name || '',
      contact_name: contact_name || ' ',
      address: address || ' ',
      city: city || '',
      zip: zip || '',
      phone: phone || '',
      email: email || '',
      password: password || ''
    };
  },

  // validationSchema: Yup.object().shape({
  //   restaurant_name: Yup.string().required('*Required field'),
  //   contact_name: Yup.string().required('*Required field'),
  //   address: Yup.string().required('*Required field'),
  //   zip: Yup.string().required('*Required field'),
  //   city: Yup.string().required('*Required field'),
  //   phone: Yup.string().required('*Required field'),
  //   email: Yup.string()
  //     .email('Invalid email')
  //     .required('*Required field'),
  //   password: Yup.string().required('*Required field'),
  //   confirmPassword: Yup.string().required('*Required field')
  // }),

  handleSubmit(values, FormikBag) {
    console.log(values);
    // forwards the user to the profile page using the formikBag props
    axiosWithAuth()
      .post('/auth/register', values)
      .then(response => {
        console.log(response);
        // sets token to local storage.
        localStorage.setItem('token', response.data.token);
        FormikBag.props.history.push('/dashboard');

        // forwards the user to the profile page using the formikBag props
      })
      .catch(err => {
        console.log(err);
      });
  }
})(BusOnboardForm);

export default FormikBusOnboardForm;
