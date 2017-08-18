// We import constants to name our actions' type
import {
  RECEIVE_SEARCH_DATA,
  SEARCH_LOCATION,
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
	  type: RECEIVE_SEARCH_DATA,
	  bars,
	}
}

export const searchForBar = (term) => {
	return (dispatch) => {
		//console.log('searchForBar Rox 2', term );
	/*  

		searchServices.barSearch(term)
    .then(bars => {
       console.log('got locations', bars );
        dispatch(receiveSearchData(bars));
      });
  */    
	};
};