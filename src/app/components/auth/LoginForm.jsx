import React from 'react';
import TextInput from '../common/TextInput';
import PasswordInput from '../common/PasswordInput';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userName: '',
        password: ''
      },
      errors: {},
      submitted: false,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  }


  validate({userName, password}) {
    const errors = {};

    if (userName.length<1) errors.userName = 'User Name is required';
    if (password.length<1) errors.password = 'Password is required';

    this.setState({errors});
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  }

  onSubmit = (event) => {
    if (event) event.preventDefault();
    const {user} = this.state;
    const formIsValid = this.validate(user);
    if (formIsValid) {
      //this.props.onSubmit(user);
      this.setState({submitted: true});
      Materialize.toast('You are valid!', 1500);
    }
  }

  render() {
    const {errors, submitted} = this.state;
    const {userName, password} = this.state.user;

    return (
      <div className="container signup">
        <h4>Login</h4>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <TextInput 
                  icon="account_circle" 
                  htmlId="signup-form-username"
                  name="userName"
                  onChange={this.onChange}
                  label="UserName"
                  value={userName}
                  error={errors.userName}
                  required />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <PasswordInput
                  icon="vpn_key" 
                  htmlId="signup-form-password"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  error={errors.password} />
             </div>
            </div>
            <div className="row">
             <div className="input-field col s12">
              <button className="btn btn-block btn-lg waves-effect" type="submit" onClick={this.onSubmit}>Login To Your Account</button>
             </div>
            </div>          
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;
