// import React, { useState, useEffect } from "react";
// import { Formik, Field } from "formik";
// import * as Yup from "yup";

// import BusOnboardForm from "./BusinessCreateAccount";
// import VolOnboardForm from "./VolunteerCreateAccount"


// // // Input feedback
// // const InputFeedback = ({ error }) =>
// //   error ? <div className={classNames("input-feedback")}>{error}</div> : null;

// const handleChange = event => {
//   const target = event.currentTarget;
//   let valueArray = [...this.props.value] || [];

//   if (target.checked) {
//     // valueArray.push(target.id);
//     return(
//       <BusOnboardForm/>
//     )
//   } else {
//     return <VolOnboardForm/>
//     // valueArray.splice(valueArray.indexOf(target.id), 1);
//   }

//   // this.props.onChange(this.props.id, valueArray);
// };

// // Radio input
// const RadioButton = ({
//   field: { name, value, onChange },
//   id,
//   label,
//   className,
//   ...props
// }) => {
//   return (
//     <div>
//       <input
//         name={name}
//         id={id}
//         type="radio"
//         value={id} // could be something else for output?
//         checked={id === value}
//         onChange={onChange}
//         // onBlur={onBlur}
//         // className={classNames("radio-button")}
//         {...props}
//       />
//       <label htmlFor={id}>{label}</label>
//     </div>
//   );
// };

// // Radio group
// const RadioButtonGroup = ({
//   value,
//   error,
//   touched,
//   id,
//   label,
//   className,
//   children
// }) => {
//   // const classes = classNames(
//   //   "input-field",
//   //   {
//   //     "is-success": value || (!error && touched), // handle prefilled or user-filled
//   //     "is-error": !!error && touched
//   //   },
//   //   className
//   // );

//   return (
//     <div>
//       <fieldset>
//         {/* <legend>{label}</legend> */}
//         {children}
//         {/* {touched && <InputFeedback error={error} />} */}
//       </fieldset>
//     </div>
//   );
// };

// const UserType = () => (
//   <div className="app">
//     <h1>I am a...</h1>
//     <Formik
//       initialValues={{
//         radioGroup: "",
//       }}
//       validationSchema={Yup.object().shape({
//         radioGroup: Yup.string().required("A radio option is required"),
//       })}
//       onSubmit={(values, actions) => {
//         setTimeout(() => {
//           console.log(JSON.stringify(values, null, 2));
//           actions.setSubmitting(false);
//         }, 500);
//       }}
//       render={({
//         handleSubmit,
//         setFieldValue,
//         setFieldTouched,
//         values,
//         errors,
//         touched,
//         isSubmitting
//       }) => (
//         <form handleChange={handleChange}>
         

//           <h2>Radio group</h2>
//           <RadioButtonGroup
//             id="radioGroup"
//             label="One of these please"
//             value={values.radioGroup}
//           >
//             <Field
//               component={RadioButton}
//               name="radioGroup"
//               id="radioOption1"
//               label="Volunteer"
//             />
//             <Field
//               component={RadioButton}
//               name="radioGroup"
//               id="radioOption2"
//               label="Business"
//             />
//           </RadioButtonGroup>
//         </form>
//       )}
//     />
//   </div>
// );
// handleChange();

// export default UserType;




// // const UserType = ({ values, status }) => {
// //   const [type, setType] = useState([]);

// //   //sets
// //   useEffect(() => {
// //     if (status) {
// //         setType([type, status]);
// //     }
// //   }, [type, status]);

// //   return (
// //     <div>
// //       <Form>
// //         <h2>I am a</h2>
// //         <div>
// //           <div>
// //             <label>Volunteer</label>
// //             <Field type="radio" name="volunteerUser"
// //             selected={type.businessUser}/>
// //           </div>
// //           <div>
// //             <label>Business</label>
// //             <Field type="checkbox" name="businessUser"
// //             checked={type.businessUser}/>
// //           </div>
// //         </div>
// //       </Form>
// //     </div>
// //   );
// // };

// // const FormikUserType = withFormik({
// //   mapPropsToValues({
// //     volunteerUser,
// //     businessUser
// //   }) {
// //     return {
// //         volunteerUser: volunteerUser || true,
// //         businessUser: businessUser || false,
// //     };
// //   },

// // //   validationSchema: Yup.object().shape({
// // //     firstName: Yup.string().required("*Required field"),
// // //     lastName: Yup.string().required("*Required field"),
// // //     phone: Yup.string().required("*Required field"),
// // //     email: Yup.string()
// // //       .email("Invalid email")
// // //       .required("*Required field"),
// // //     password: Yup.string().required("*Required field"),
// // //     confirmPassword: Yup.string().required("*Required field")
// // //   }),

// // //   handleChange(values, { setStatus }) {
// // //     axios
// // //       .post("https://reqres.in/api/users", values)
// // //       .then(res => {
// // //         setStatus(res.data);
// // //         console.log("VolOnboardForm POST request success:", res);
// // //       })
// // //       .catch(err => console.log(err.res));
// // //   }
// // })(UserType);

