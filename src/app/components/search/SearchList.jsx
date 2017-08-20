import React, {PropTypes} from 'react';
import SearchListItem from './SearchListItem';
import { connect } from 'react-redux';

const  SearchList = (props) => {
  const barlist = props.bars.map( (bar, i) => {
   return  <SearchListItem 
      bar={bar}
      isLoggedIn={props.isLoggedIn} 
      onGoingClick={props.onGoingClick}
      key={i}
    />
  });

  const searchText = props.bars.length 
    ? `Search for : ${props.location}` 
    : '';

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
  isLoggedIn: React.PropTypes.bool.isRequired,
  location: React.PropTypes.string.isRequired,
  bars: React.PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(SearchList);
