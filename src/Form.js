import React, { useState } from 'react';
import './Form.css';
import validate from './validateInfo';
import useForm from './useForm';
import FormSuccess from './FormSuccess';
import {useHistory} from "react-router-dom";

const Form = () => {
  let history =useHistory();
  const current = new Date().toISOString().split("T")[0]
const [isSubmitted, setIsSubmitted] = useState(false);
const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
         <img className='form-img' src='img/signup.png' alt='signup' />
        </div>
        {!isSubmitted ? (
          <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
          <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='firstname'
            placeholder='Enter your First Name'
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
          <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your Last Name'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Date of Birth</label>
          <input
            className='form-input'
            type='date'
            name='birthdate'
            max= {current}
            value={values.birthdate}
            onChange={handleChange}
          />
          {errors.birthdate && <p>{errors.birthdate}</p>}
        </div>
        
        
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login' onClick={()=>{
          history.push("/form2");
        }}>
        Already have an account? Login
        </span>
      </form>
    </div>
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
