// We import constants to name our actions' type
import {
  LOAD_SEARCH_SUCCESS,
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
	  type: LOAD_SEARCH_SUCCESS,
	  bars,
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