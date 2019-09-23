import React, { useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const VolOnboardForm = ({ values, errors, touched, status }) => {
    const [volunteer, setVolunteer] = useState([]);

    useEffect(() => {
    if (status) {
        setVolunteer ([...volunteer, status]);
    }
    }, [status, volunteer]);

    return(
        <div>
            <Form>
                <h1>Create Your Volunteer Account</h1>
                <Field type="text" name="firstName"/>
            </Form>
        </div>
    )
};

const FormikVolOnboardForm = withFormik({
    mapPropsToValues ({ firstName }){
        return{
            firstName: firstName || ""
        }
    },

    validationSchema: Yup.object().shape({
        firstName: Yup.string().required("First Name required")
    }),

    handleSubmit(values, {setStatus}){
        axios.post("https://reqres.in/api/users", values)
        .then(res => {
            setStatus(res.data);
            console.log("VolOnboardForm POST request success:", res);
        })
        .catch(err => console.log(err.res));
    }
})(VolOnboardForm);

export default FormikVolOnboardForm;
