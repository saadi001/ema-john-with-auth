import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
     const {signIn} = useContext(AuthContext);
     const navigate = useNavigate();

     const handleForm = (event) =>{

          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;

          signIn(email,password)
          .then(result =>{
               const user = result.user;
               form.reset();
               navigate('/')
               console.log(user)
          })
          .catch(error => console.error(error))

     }
     return (
          <div className='loginForm'>
               <div className='form-container'>
                    <form onSubmit={handleForm} className='form'>
                         <h3>Log in</h3>
                         <div className='input-field'>
                              <label htmlFor="email">Email</label>
                              <input type="email" name="email" required />
                         </div>
                         <div className='input-field'>
                              <label htmlFor="password">Password</label>
                              <input type="password" name="password" required />
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