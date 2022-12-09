import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from '../Api/axios'; 
import Home from './Home';
import useAuth from '../Custom Hooks/useAuth';
import useInput from '../Custom Hooks/useInput';
import useToggle from '../Custom Hooks/useToggle';
import { Helmet } from 'react-helmet-async';
const LOGIN_URL = ('/auth/login')

const Login = () => {
  const { setAuth } = useAuth();

  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || '/';

  const userRef = useRef();
  const errorRef = useRef();

  const [email, resetEmail, emailAtt] = useInput('email', '');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [check, toggleCheck] = useToggle('persist', false)

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrorMsg('');
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

     try {
        const response = await axios.post(LOGIN_URL, JSON.stringify({email, password}), 
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
        );
        console.log(JSON.stringify(response?.data))
        const accessToken = response?.data?.accessToken;
       setAuth({email, password, accessToken})
       resetEmail();
       setPassword('');
       setLoggedIn(true);
      //  navigate(from, {replace: true});
     } catch (error) {
        if (!error?.response) {
          setErrorMsg('No Server Response');
        } else if (error.response?.status === 400) {
          setErrorMsg('Missing Email and Password');
        } else if (error.response?.status === 401) {
          setErrorMsg('Unauthorized');
        } else {
          setErrorMsg('Login Failed');
        }
        errorRef.current.focus();
     }

  }

  return (
    <>
      {loggedIn ? (
      <Home  setLoggedIn={setLoggedIn}/>
      ) : (

        <div >
          <Helmet>
            <title>Login</title>
            <meta name='description' content="Login to navigate to the home page."/>
            <link rel="canonical" href="/login" />
          </Helmet>
          <div >
            <div className="card-body ">
              <form className='form' action='https://userauthe-project.netlify.app/' method='get'>
          <p ref={errorRef} className={errorMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errorMsg}</p>
                <div className="form-group">
                  <h3>START FOR FREE</h3>
                  <h1>Login</h1>
                  <h3>Not a member? <NavLink to='/login'>Sign Up</NavLink></h3>
                  <label htmlFor="exampleInputemail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputemail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    ref={userRef}
                    autoComplete="off"
                    {...emailAtt}
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    // required
                  />
                </div>
                <div className="form-group form-check">
                  <input 
                  type="checkbox" 
                  className="form-check-input" id="exampleCheck1" 
                  onChange={toggleCheck}
                  checked={check}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">Trust this Device</label>
                </div>
                <button className="btn btn-primary">Login</button>
              </form>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Login