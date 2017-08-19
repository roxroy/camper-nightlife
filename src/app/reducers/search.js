// We import constants to name our actions' type
import {
 	LOAD_SEARCH_SUCCESS,
  SEARCH_LOCATION,
} from '../actions/constants'

const defaultState = {
	location: '',
	bars: [],
};
 
export default function reducer(state = defaultState, action) {
	switch (action.type) {
		case SEARCH_LOCATION: 
			return Object.assign({}, state, { 
				location: action.location,
			});
		case LOAD_SEARCH_SUCCESS: 
			return Object.assign({}, state, { 
				bars: action.bars,
			});
		default:
			return state;
	}
}