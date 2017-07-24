import React, {PropTypes} from 'react';
import SearchListItem from './SearchListItem';

const  SearchList = (props) => {
	const bars = props.barlist.bars.map( (bar, i) => {
     return  <SearchListItem bar={bar} key={i} />
    });
	const searchText = props.barlist.bars.length ? 
	`Search for : ${props.location}` :
   '';
	          
  return (
	    <div>
	    	<div className="row">
	        <div className="col s12">
	          <h5 className="center">{searchText}</h5>
	          {bars}
	        </div>
	      </div>
	    </div>
  )
}

export default SearchList;
