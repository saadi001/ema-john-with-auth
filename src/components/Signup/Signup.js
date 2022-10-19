import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Signup.css';

const Signup = () => {
     const [error, setError] = useState(null);
     const {createUser} = useContext(AuthContext);

     const handleSignUp = (event) =>{
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          const confirm = form.confirm.value;
          console.log(email, password, confirm);

          if(password.length< 6){
               setError('password should be at least 6 character');
          }
          if(password !== confirm){
               setError("passwords didn't match");
          }

          createUser(email, password)
          .then(result =>{
               const user = result.user;
               form.reset();
               console.log(user);
          })
          .catch(error => console.error(error));

     }
     return (
          <div className='loginForm'>
               <div className='form-container'>
                    <form onSubmit={handleSignUp} className='form'>
                         <h3>Sign Up</h3>
                         <div className='input-field'>
                              <label htmlFor="email">Email</label>
                              <input type="email" name="email"  required />
                         </div>
                         <div className='input-field'>
                              <label htmlFor="password">Password</label>
                              <input type="password" name="password"  required />
                         </div>
                         <div className='input-field'>
                              <label htmlFor="confirm">Confirm password</label>
                              <input type="password" name="confirm"  required />
                         </div>
                         <p className='error'><small>{error? error:''}</small></p>
                         <button type='submit' className='loginbtn'>Log in</button>
                         <p><small>Already have an account?<Link to='/login'>Log in</Link></small></p>
                         <hr />

                    </form>
                    <div className='googlebtn'>Continue with Google</div>

               </div>
          </div>
     );
};

export default Signup;