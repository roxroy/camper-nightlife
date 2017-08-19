import React from 'react';
import Searchbar from './Searchbar';
import SearchList from './SearchList';
import './search.scss';
import { connect } from 'react-redux';
import { searchLocation, searchForBar, rsvpBar } from '../../actions/search';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onGoingClick = this.onGoingClick.bind(this);
  }

  onSubmit = (location) => {
    this.props.searchForBars(location);
    this.props.searchLocation(location);
  }    

  onGoingClick = (event) => {
    if (event) event.preventDefault();
    const barid = $(event.target).parent().closest('.card').data('barid');
    this.props.rsvpBar(barid);
  }

 	render() {
    const barlist = { bars:  this.props.bars };
	  return (
	    <div>
	      <Searchbar onSubmit={this.onSubmit} />
	      <SearchList 
          bars={barlist.bars} 
          location={this.props.location} 
          onGoingClick={this.onGoingClick} />
	    </div>
	  )
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
      location: state.search.location,
      bars: state.search.bars,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      searchForBars: (term) => { dispatch(searchForBar(term)); },
      searchLocation: (location) => { dispatch(searchLocation(location)); },
      rsvpBar: (barId) => { dispatch(rsvpBar(barId)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
