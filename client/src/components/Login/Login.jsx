import React from 'react'
import { signInWithGoogle  } from '../../FirebaseConfig'
import './Login.scss'



function Login() {
  return (
    <div><form>
      <div className="mb-3 my-5 container">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3 my-4 container">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
      <div id="emailHelp" className="form-text">Don't Have An Account?</div>
    </form>
      <button type="button" className="login-with-google-btn my-1" onClick={signInWithGoogle}   >
        Sign in with Google
      </button>
      {/* <button  className="btn btn-primary " onClick={signInWithGoogle}>Login with Google</button> */}
     
    </div>
  )
}

export default Login