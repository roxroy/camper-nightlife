import React from 'react';

const  SearchListItem = (props) => {
  const bar = props.bar;
  const address= bar.location.address1 + ' ' + bar.location.address2;
  const goingText = (bar.amGoing && props.isLoggedIn) ? 'Am Going' : 'Not Going';

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
          <span className="waves-effect waves-light btn" onClick={props.onGoingClick}>{goingText}</span>
          <span className="badge right-align">{bar.totalGoing} Yes</span>
        </div>
      </div>
    </div>
  )
}

export default SearchListItem;
