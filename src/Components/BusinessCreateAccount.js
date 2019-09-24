import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const BusOnboardForm = ({ values, errors, status, validateForm }) => {
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
            <label>Business Name</label>
            <Field
              type="text"
              name="name"
            //   value=""
            //   placeholder="" || {errors.name}
            //   className="errors"
            />
            {errors.name && <p className="errors">{errors.name}</p>}
          </div>
          <div>
            <label>Contact Name</label>
            <Field type="text" name="name" />
            {errors.contactName && (
              <p className="errors">{errors.contactName}</p>
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
          onClick={() => validateForm().then(() => console.log("blah"))}
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

const FormikBusOnboardForm = withFormik({
  mapPropsToValues({
    name,
    contactName,
    address,
    city,
    zip,
    phone,
    email,
    password,
    confirmPassword
  }) {
    return {
      name: name || "",
      contactName: contactName || "",
      address: address || "",
      city: city || "",
      zip: zip || "",
      phone: phone || "",
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("*Required field"),
    contactName: Yup.string().required("*Required field"),
    address: Yup.string().required("*Required field"),
    zip: Yup.string().required("*Required field"),
    city: Yup.string().required("*Required field"),
    phone: Yup.string().required("*Required field"),
    email: Yup.string()
      .email("Invalid email")
      .required("*Required field"),
    password: Yup.string().required("*Required field"),
    confirmPassword: Yup.string().required("*Required field")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        setStatus(res.data);
        console.log("BusOnboardForm POST request success:", res);
      })
      .catch(err => console.log(err.res));
  }
})(BusOnboardForm);

export default FormikBusOnboardForm;
