import React from 'react';

function Login() {
  return (
    <div className="container login">
      <h4>Login</h4>
      <div className="row">
    		<form className="col s12">
          <div className="row">
           <div className="input-field col s12">
            <i className="material-icons prefix">account_circle</i>
            <input id="username" type="text" className="validate" />
            <label htmlFor="username">User Name</label>
           </div>
          </div>
      		<div className="row">
      		 <div className="input-field col s12">
	          <i className="material-icons prefix">vpn_key</i>
	          <input id="password" type="password" className="validate" />
            <label htmlFor="password">Password</label>
	         </div>
      		</div>
          <div className="row">
           <div className="input-field col s12">
            <button className="btn btn-block btn-lg waves-effect" type="submit">Login To Your Account</button>
           </div>
          </div>          

      	</form>
      </div>
    </div>
  )
}

export default Login;
