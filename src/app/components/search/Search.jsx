import React from 'react';
import Searchbar from './Searchbar';
import SearchList from './SearchList';
import './search.scss';
import { connect } from 'react-redux';
import {receiveSearchData, searchForBar} from '../../actions/search';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onGoingClick = this.onGoingClick.bind(this);    
  }

  updateGoing = (barid) => {
    const _bars = this.props.bars;
    const _bar = _bars.find(bar => bar.id === barid);
    if (_bar.amGoing){
      _bar.amGoing = false;
      _bar.totalGoing--;
    } else {
      _bar.amGoing = true;
      _bar.totalGoing++;
    }
    return _bars;
  }

  onSubmit = (location) => {
    console.log('Rox 1', location );
    this.props.searchForBars(location);
  }    

  onGoingClick = (event) => {
    if (event) event.preventDefault();
    const barid = $(event.target).parent().closest('.card').data('barid');
    console.log('onGoingClick', barid);
    const _bars = this.updateGoing(barid);
    this.setState({
      bars : _bars,
    });
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
        searchForBars: (term) => { dispatch(searchForBar(term)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
