import React, {PropTypes} from 'react';
import SearchListItem from './SearchListItem';

const  SearchList = ({barlist}) => {
	const bars = barlist.bars.map( (bar, i) => {
     return  <SearchListItem bar={bar} key={i} />
    });
	console.log('SearchList barlist', barlist, barlist.bars, bars);
	          
  return (
	    <div>
	    	<div className="row">
	        <div className="col s12">
	          <h5 className="center">SearchList</h5>
	          {bars}
	        </div>
	      </div>
	    </div>
  )
}

export default SearchList;
