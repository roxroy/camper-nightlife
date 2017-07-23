import React from 'react';
import Searchbar from '../components/search/Searchbar';
import SearchList from '../components/search/SearchList';
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
    const bars = searchServices.barSearch(location);
    console.log('your location', location, bars );
    this.setState({
      bars
    });
  }

 	render() {
    const barlist = {this.state.bars};
	  return (
	    <div>
	      <Searchbar onSubmit={this.onSubmit} />
	      <SearchList barlist={barlist} />
	    </div>
	  )
	}
}

export default Search;
