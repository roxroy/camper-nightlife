import React from 'react';
import TextInput from '../common/TextInput';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    const location = event.target.value;
    this.setState({location});
  }

  onSubmit = (event) => {
    if (event) event.preventDefault();
    const location = this.state.location;
    this.props.onSubmit(location);
  }

  render() {
    const location = this.state.location;

    return (
  	<div className="row">
      <h5 className="center blue-text ">Find the best bars in your area</h5>
      <div className="row">
        <div className="input-field col s10">
          <TextInput 
            icon="local_drink" 
            htmlId="search-form-location"
            name="location"
            onChange={this.onChange}
            label="location"
            value={location}
            required />
        </div>
        <div className="input-field col s2">
            <button className="btn btn-block btn-lg waves-effect" type="submit" onClick={this.onSubmit}>Search</button>
        </div>
      </div>
    </div>
    )
  }
}

export default Searchbar;
