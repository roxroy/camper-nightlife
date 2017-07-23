import React from 'react';
import Searchbar from './Searchbar';
import SearchList from './SearchList';
import searchServices from './searchService';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bars: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (location) => {
    const cb = data => {
      this.setState({
        bars : data
      });
    }
    searchServices.barSearch(location)
    .then(bars => {
       console.log('got locations', bars );
      })
  }    

 	render() {
    const barlist = { bars:  this.state.bars };
	  return (
	    <div>
	      <Searchbar onSubmit={this.onSubmit} />
	      <SearchList barlist={barlist} />
	    </div>
	  )
	}
}

export default Search;
