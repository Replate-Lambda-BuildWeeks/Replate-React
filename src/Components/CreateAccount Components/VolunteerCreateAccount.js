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

const VolOnboardForm = ({ errors, status, validateForm }) => {
  const [volunteer, setVolunteer] = useState([]);

  //sets
  useEffect(() => {
    if (status) {
      setVolunteer([...volunteer, status]);
    }
<<<<<<< HEAD:src/Components/CreateAccount Components/VolunteerCreateAccount.js
  }, [setVolunteer, status]);
=======
  }, [volunteer, status]);
>>>>>>> 25078f2c57040e8162ed2ef83de73d6a7707a614:src/Components/VolunteerCreateAccount.js

  return (
    <div>
      <Form>
        <h2>Create Volunteer Account</h2>
        <div>
          <div>
            <label>Full Name</label>
            <Field
              type="text"
              name="volunteer_name"
              initial-value=""
              placeholder={errors.volunteer_name}
            />
          </div>

          <div>
            <label>Phone</label>
            <Field
              type="text"
              name="phone"
<<<<<<< HEAD:src/Components/CreateAccount Components/VolunteerCreateAccount.js
              placeholder={errors.phone}
              className="errors"
=======
              placeholder="xxx-xxx-xxxx"
>>>>>>> 25078f2c57040e8162ed2ef83de73d6a7707a614:src/Components/VolunteerCreateAccount.js
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
              placeholder={errors.password}
              className="errors"
            />
          </div>
        </div>
        <button
          type="submit"
<<<<<<< HEAD:src/Components/CreateAccount Components/VolunteerCreateAccount.js
          onClick={() =>
            validateForm().then(() => console.log("Volunteer Form Submitted"))
          }
=======
          onClick={() => validateForm().then(() => console.log('blah'))}
>>>>>>> 25078f2c57040e8162ed2ef83de73d6a7707a614:src/Components/VolunteerCreateAccount.js
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

const FormikVolOnboardForm = withFormik({
  mapPropsToValues({
    volunteer_name,
    phone,
    email,
    username,
    password,
    confirmPassword
  }) {
    return {
<<<<<<< HEAD:src/Components/CreateAccount Components/VolunteerCreateAccount.js
      volunteer_name: volunteer_name || "",
      phone: phone || "",
      email: email || "",
      username: username || "",
      password: password || "",
      confirmPassword: confirmPassword || ""
=======
      firstName: firstName || '',
      lastName: lastName || '',
      phone: phone || '',
      email: email || '',
      password: password || '',
      confirmPassword: confirmPassword || ''
>>>>>>> 25078f2c57040e8162ed2ef83de73d6a7707a614:src/Components/VolunteerCreateAccount.js
    };
  },

  validationSchema: Yup.object().shape({
<<<<<<< HEAD:src/Components/CreateAccount Components/VolunteerCreateAccount.js
    volunteer_name: Yup.string().required("*Required field"),
    phone: Yup.string().required("*Required field"),
    email: Yup.string()
      .email("Invalid email")
      .required("*Required field"),
    username: Yup.string().required("*Required field"),
    password: Yup.string().required("*Required field"),
    confirmPassword: Yup.string().required("*Required field")
=======
    firstName: Yup.string().required('*Required field'),
    lastName: Yup.string().required('*Required field'),
    phone: Yup.string().required('*Required field'),
    email: Yup.string()
      .email('Invalid email')
      .required('*Required field'),
    password: Yup.string().required('*Required field'),
    confirmPassword: Yup.string().required('*Required field')
>>>>>>> 25078f2c57040e8162ed2ef83de73d6a7707a614:src/Components/VolunteerCreateAccount.js
  }),

  handleSubmit(values, { setStatus }) {
    axios
<<<<<<< HEAD:src/Components/CreateAccount Components/VolunteerCreateAccount.js
      .post("http://0bbfee1e.ngrok.io/volunteers", values)
=======
      .post('http://0bbfee1e.ngrok.io/auth/login', values)
>>>>>>> 25078f2c57040e8162ed2ef83de73d6a7707a614:src/Components/VolunteerCreateAccount.js
      .then(res => {
        setStatus(res.data);
        console.log('VolOnboardForm POST request success:', res);
      })
      .catch(err => console.log(err.res));
  }
})(VolOnboardForm);

export default FormikVolOnboardForm;
