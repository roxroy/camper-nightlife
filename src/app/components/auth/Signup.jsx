import React from 'react';

function Signup() {
  return (
   	<div className="signup">
      <h4>Signup</h4>
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
	          <i className="material-icons prefix">vpn_key</i>
	          <input id="confirm_password" type="password" className="validate" />
            <label htmlFor="confirm_password">Confirm Password</label>
	         </div>
      		</div>
      		<div className="row">
      		 <div className="input-field col s12">
      		 	<button className="btn btn-block btn-lg waves-effect" type="submit">Create Account</button>
	         </div>
      		</div>      		
      	</form>
      </div>
    </div>
  )
}

export default Signup;
