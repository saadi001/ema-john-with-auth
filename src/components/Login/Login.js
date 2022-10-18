import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
     return (
          <div className='loginForm'>
               <div className='form-container'>
                    <form className='form'>
                         <h3>Log in</h3>
                         <div className='input-field'>
                              <label htmlFor="email">Email</label>
                              <input type="email" name="email" id="" required />
                         </div>
                         <div className='input-field'>
                              <label htmlFor="password">Password</label>
                              <input type="password" name="password" id="" required />
                         </div>
                         <button type='submit' className='loginbtn'>Log in</button>
                         <p><small>New here? <Link to='/signup'>Create an account</Link></small></p>
                         <hr />

                    </form>
                    <div className='googlebtn'>Continue with Google</div>

               </div>
          </div>
     );
};

export default Login;