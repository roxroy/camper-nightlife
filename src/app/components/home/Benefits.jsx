import React from 'react';

function Benefits() {
  return (
    	<div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons medium">chat_bubble_outline</i></h2>
            <h5 className="center">Check in, rate, unlock badges</h5>
            <p className="light">Keep track of where you’ve tried and what you thought of it by checking and rating it.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons medium">av_timer</i></h2>
            <h5 className="center">Try new drinks & food</h5>
            <p className="light">Expand your palate by trying new & different drinks styles and unlock achievements along the way.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons medium">location_on</i></h2>
            <h5 className="center">Explore nearby popular spots</h5>

            <p className="light">Not sure where to go? We will show your popular entertainment spots and venues nearby.</p>
          </div>
        </div>
      </div>
  )
}

export default Benefits;
