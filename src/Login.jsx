import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "./schema/auth/loginSchema";

const Login = () => {
  const formik = useFormik({
    initialValues: {
        firstName:"",
        lastName:"",
         email: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const {handleSubmit, handleChange,handleBlur, values, touched,errors  }  = formik;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstName}
      />
      {touched.firstName && errors.firstName ? (
        <div style={{color:"red"}}>{errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName}
      />
      {touched.lastName && errors.lastName ? (
        <div style={{color:"red"}}>{errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {touched.email && errors.email ? (
        <div style={{color:"red"}}>{errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
