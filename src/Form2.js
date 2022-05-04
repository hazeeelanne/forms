import React, { useState } from 'react';
import './Form.css';
import validate from './validateInfo';
import useForm from './useForm';
import FormSuccess from './FormSuccess';
import { useHistory } from 'react-router-dom';

const Form2 = () => {
 
  const [isSubmitted, setIsSubmitted] = useState(false);
const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  function submitForm() {
    setIsSubmitted(true);
  }

   const history =useHistory();
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
         <img className='form-img' src='img/login.png' alt='login' />
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
      
        <button className='form-input-btn' type='submit'>
            Log in</button>
       
          <span className='form-input-login' onClick={()=>{
          history.push("/");
        }}>
      Don't have an account? Sign up
        </span> 
      </form>
    </div>
        ) : ( 
       <div>
       <text>Successfully Logged in</text>
       </div>)}
      </div>
    </>
  );
};

export default Form2;
