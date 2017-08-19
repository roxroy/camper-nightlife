// We import constants to name our actions' type
import {
 	LOAD_SEARCH_SUCCESS,
  SEARCH_LOCATION,
  UPDATE_RSVP,
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
		case UPDATE_RSVP: 
			const bars = state.bars.map(bar =>
        (bar.id === action.barId) 
          ? {...bar, totalGoing: action.rsvpInfo.totalGoing, amGoing: action.rsvpInfo.amGoing}
          : bar);
			return Object.assign({}, state, { 
				bars
			});
			
		default:
			return state;
	}
}