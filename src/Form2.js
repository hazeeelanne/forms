import React, { useState } from 'react';
import './Form.css';
import validate2 from './validateInfor2';
import useForm2 from './useform2';
import FormSuccess2 from './FormSuccess2';
import { useHistory } from 'react-router-dom';

const Form2 = () => {
 
  const [isSubmitted, setIsSubmitted] = useState(false);
const { handleChange, handleSubmit, values, errors } = useForm2(
    submitForm,
    validate2
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
         Welcome Back!  To Login to your account please enter the following details.
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
              <FormSuccess2 />
)}
      </div>
    </>
  );
};

export default Form2;
