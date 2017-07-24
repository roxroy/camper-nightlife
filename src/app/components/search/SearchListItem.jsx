import React from 'react';

const  SearchListItem = ({bar}) => {
  const address= bar.location.address1 + ' ' + bar.location.address2;
  const totalGoing = 1;

  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src={bar.image_url}/>
        </div>
        <div className="card-content">
          <span className="card-title">
          <a href={bar.url}>{bar.name}</a></span>
          <p>{address}</p>
          <span>Rating: {bar.rating}/5.0</span>
        </div>   
        <div className="card-action">
          <a href="#">Going?</a>
          <span className="badge right-align">{totalGoing} Yes</span>
        </div>
      </div>
    </div>
  )
}

export default SearchListItem;
