import React from 'react';
import Searchbar from './Searchbar';
import SearchList from './SearchList';
import searchServices from './searchService';
import './search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bars: [],
      location: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (location) => {
    searchServices.barSearch(location)
    .then(bars => {
       console.log('got locations', bars );
       this.setState({
         bars : bars.businesses,
         location: location,
       });
      });
  }    

  onGoingClick = (event, ) => {
    if (event) event.preventDefault();
    console.log('onGoingClick');  
  }

 	render() {
    const barlist = { bars:  this.state.bars };
	  return (
	    <div>
	      <Searchbar onSubmit={this.onSubmit} />
	      <SearchList bars={barlist.bars} location={this.state.location} />
	    </div>
	  )
	}
}

export default Search;
