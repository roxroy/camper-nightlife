// We import constants to name our actions' type
import {
  LOAD_SEARCH_SUCCESS,
  SEARCH_LOCATION,
  UPDATE_BAR_RSVP,
  UPDATE_ALL_RSVPS,
} from './constants';

import searchServices from '../components/search/searchService';
import { browserHistory } from 'react-router';

export const searchLocation = (location) => {
	return {
	 	type: SEARCH_LOCATION,
		location,
	}
}

export const updateAllRsvps = (rsvpInfo) => {
	return {
	  type: UPDATE_ALL_RSVPS,
	  rsvpInfo,
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
	  type: UPDATE_BAR_RSVP,
	  barId,
	  rsvpInfo,
	}
}

export const getAllRsvps = () => {
	return (dispatch) => {
		searchServices.getAllRsvps()
    .then(rsvpInfo => {
      dispatch(updateAllRsvps(rsvpInfo));
    });  
	};
};

export const searchForBar = (term) => {
	return (dispatch) => {
		searchServices.barSearch(term)
    .then(bars => {
        dispatch(receiveSearchData(bars));
      });  
	};
};

export const rsvpBar = (barId) => {
	return (dispatch) => {
		searchServices.barRsvp(barId)
    .then(rsvpInfo => {
    	if (!rsvpInfo.hasOwnProperty('error')){
	     	dispatch(updateRsvp(barId, rsvpInfo));
    	} else {
	     	dispatch(browserHistory.push('/login'));    		
    	}
		});
  }
};