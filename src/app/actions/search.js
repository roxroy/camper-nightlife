// We import constants to name our actions' type
import {
  LOAD_SEARCH_SUCCESS,
  SEARCH_LOCATION,
  UPDATE_RSVP,
} from './constants';

import searchServices from '../components/search/searchService';

export const searchLocation = (location) => {
	return {
	 	type: SEARCH_LOCATION,
		location,
	}
}

export const receiveSearchData = (bars) => {
	return {
	  type: LOAD_SEARCH_SUCCESS,
	  bars,
	}
}

export const updateRsvp = (barId, rsvpInfo ) => {
	return {
	  type: UPDATE_RSVP,
	  barId,
	  rsvpInfo,
	}
}

export const searchForBar = (term) => {
	return (dispatch) => {
		searchServices.barSearch(term)
    .then(bars => {
       console.log('got locations', bars );
        dispatch(receiveSearchData(bars));
      });
  
	};
};

export const rsvpBar = (barId) => {
	return (dispatch) => {
		searchServices.barRsvp(barId)
    .then(rsvpInfo => {
    	console.log('searchServices.barRsvp', rsvpInfo );
	     dispatch(updateRsvp(barId, rsvpInfo));
		});
  }
};