import React from 'react';

function SearchListItem(bar) {
  return (
    <div className="hero">
    	<div className="row">
        <div className="col s12">
          <h5 className="center">bars in your area</h5>
          {bar.name}
        </div>
      </div>
    </div>
  )
}

export default SearchListItem;
