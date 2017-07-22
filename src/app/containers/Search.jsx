import React from 'react';
import Searchbar from '../components/search/Searchbar';
import SearchList from '../components/search/SearchList';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

 	render() {
	  return (
	    <div>
	      <Searchbar />
	      <SearchList />
	    </div>
	  )
	}
}

export default Search;
