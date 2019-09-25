import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const BusOnboardForm = ({ errors, status }) => {
  const [business, setBusiness] = useState([]);

  //sets
  useEffect(() => {
    if (status) {
      setBusiness([...business, status]);
    }
  }, [setBusiness, status]);

  return (
    <div>
      <Form>
        <h2>Create Business Account</h2>
        <div>
          <div>
            <label>Business Name</label>
            <Field
              type="text"
              name="restaurant_name"
              placeholder={errors.restaurant_name}
              className="errors"
            />
          </div>
          <div>
            <label>Contact Name</label>
            <Field
              type="text"
              name="contact_name"
              placeholder={errors.contact_name}
              className="errors"
            />
          </div>
          <div>
            <label>Street Address</label>
            <Field
              type="text"
              name="address"
              placeholder={errors.address}
              className="errors"
            />
          </div>
          <div>
            <label>City</label>
            <Field
              type="text"
              name="city"
              placeholder={errors.city}
              className="errors"
            />
          </div>
          <div>
            <label>Zip</label>
            <Field
              type="text"
              name="zip"
              placeholder={errors.zip}
              className="errors"
            />
          </div>
          <div>
            <label>Phone</label>
            <Field
              type="text"
              name="phone"
              placeholder="xxx-xxx-xxxx"
              placeholder={errors.phone}
              className="errors"
              //   validate={validatePhone}
            />
          </div>
          <div>
            <label>Email</label>
            <Field
              type="email"
              name="email"
              placeholder={errors.email}
              className="errors"
            />
          </div>
          <div>
            <label>Username</label>
            <Field
              type="text"
              name="username"
              placeholder={errors.username}
              className="errors"
            />
          </div>
          <div>
            <label>Password</label>
            <Field
              type="password"
              name="password"
              placeholder={errors.password}
              className="errors"
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <Field
              type="password"
              name="confirmPassword"
              placeholder={errors.confirmPassword}
              className="errors"
            />
          </div>
        </div>
        <button
          type="submit"
          // onClick={() => validateForm().then(() => console.log("blah"))}
        >
          Submit
        </button>
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
    username,
    password,
    confirmPassword
  }) {
    return {
      restaurant_name: restaurant_name || "",
      contact_name: contact_name || "",
      address: address || "",
      city: city || "",
      zip: zip || "",
      phone: phone || "",
      email: email || "",
      username: username || "",
      password: password || "",
      confirmPassword: confirmPassword || ""
    };
  },

  validationSchema: Yup.object().shape({
    restaurant_name: Yup.string().required("*Required field"),
    contact_nameName: Yup.string().required("*Required field"),
    address: Yup.string().required("*Required field"),
    zip: Yup.string().required("*Required field"),
    city: Yup.string().required("*Required field"),
    phone: Yup.string().required("*Required field"),
    email: Yup.string()
      .email("Invalid email")
      .required("*Required field"),
      username: Yup.string().required("*Required field"),
    password: Yup.string().required("*Required field"),
    confirmPassword: Yup.string().required("*Required field")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("http://0bbfee1e.ngrok.io/restaurants", values)
      .then(res => {
        setStatus(res.data);
        console.log("BusOnboardForm POST request success:", res);
      })
      .catch(err => console.log(err.res));
  }
})(BusOnboardForm);

export default FormikBusOnboardForm;
