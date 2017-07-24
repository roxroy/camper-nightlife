import React from 'react';
import Searchbar from './Searchbar';
import SearchList from './SearchList';
import searchServices from './searchService';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bars: [],
      location: []
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (location) => {
    searchServices.barSearch(location)
    .then(bars => {
       console.log('got locations', bars );
       this.setState({
         bars : bars.businesses
       });
      });
  }    

 	render() {
    const barlist = { bars:  this.state.bars };
	  return (
	    <div>
	      <Searchbar onSubmit={this.onSubmit} />
	      <SearchList barlist={barlist} location={location} />
	    </div>
	  )
	}
}

export default Search;
