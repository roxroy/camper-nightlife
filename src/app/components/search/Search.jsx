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
    this.onGoingClick = this.onGoingClick.bind(this);    
  }

  onSubmit = (location) => {
    searchServices.barSearch(location)
    .then(bars => {
       console.log('got locations', bars );
       this.setState({
         bars : bars,
         location: location,
       });
      });
  }    

  onGoingClick = (event) => {
    if (event) event.preventDefault();
    const barid = $(event.target).parent().closest('.card').data('barid');
    console.log('onGoingClick', barid);
    const _bars = this.state.bars;
    const _bar = _bars.find(bar => bar.id === barid);
    if (_bar.amGoing){
      _bar.amGoing = false;
      _bar.totalGoing--;
    } else {
      _bar.amGoing = true;
      _bar.totalGoing++;
    }
    this.setState({
      bars : _bars,
    });
  }

 	render() {
    const barlist = { bars:  this.state.bars };
	  return (
	    <div>
	      <Searchbar onSubmit={this.onSubmit} />
	      <SearchList 
          bars={barlist.bars} 
          location={this.state.location} 
          onGoingClick={this.onGoingClick} />
	    </div>
	  )
	}
}

export default Search;
