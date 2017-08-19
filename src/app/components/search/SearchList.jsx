import React, {PropTypes} from 'react';
import SearchListItem from './SearchListItem';

const  SearchList = (props) => {
	console.log('SearchList', props);

	const barlist = props.bars.map( (bar, i) => {
     return  <SearchListItem bar={bar}  onGoingClick={props.onGoingClick}  key={i} />
    });

	const searchText = props.bars.length ? 
	`Search for : ${props.location}` :
   '';
	          
  return (
	    <div>
	    	<div className="row">
	        <div className="col s12">
	          <h5 className="center">{searchText}</h5>
	          {barlist}
	        </div>
	      </div>
	    </div>
  )
}

SearchList.propTypes = {
  location: React.PropTypes.string.isRequired,
  bars: React.PropTypes.array.isRequired
};

export default SearchList;
