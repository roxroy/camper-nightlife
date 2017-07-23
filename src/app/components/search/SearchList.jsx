import React, {PropTypes} from 'react';
import SearchListItem from './SearchListItem';

function SearchList({barlist}) {
	console.log(barlist);
  return (
	    <div>
	    	<div className="row">
	        <div className="col s12">
	          <h5 className="center">SearchList</h5>
	          {barlist.bars.map( (bar, index) => {
	            <SearchListItem bar={bar} key={index} />
	          })
	          }
	        </div>
	      </div>
	    </div>
  )
}

export default SearchList;
