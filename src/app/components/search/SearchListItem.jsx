import React from 'react';


const  SearchListItem = (props) => {
  const bar = props.bar;
  const address= bar.location.address1 + ' ' + bar.location.address2;
  const totalGoing = 1;

  return (
    <div className="col s12 m4">
      <div className="card bar-card" data-barid={bar.id}>
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
          <button className="btn btn-block btn-lg waves-effect" type="submit" onClick={props.onGoingClick}> Going? </button>
          <span className="badge right-align">{totalGoing} Yes</span>
        </div>
      </div>
    </div>
  )
}

export default SearchListItem;
