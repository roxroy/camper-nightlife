// We import constants to name our actions' type
import {
 	LOAD_SEARCH_SUCCESS,
  SEARCH_LOCATION,
  UPDATE_BAR_RSVP,
  UPDATE_ALL_RSVPS,
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

		case UPDATE_BAR_RSVP:
		{
			const bars = state.bars.map(bar =>
        (bar.id === action.barId) 
          ? {...bar, totalGoing: action.rsvpInfo.totalGoing, amGoing: action.rsvpInfo.amGoing}
          : bar);
			
			return Object.assign({}, state, { 
				bars 
			});
		}

		case UPDATE_ALL_RSVPS:
		{
			const rsvpInfo = action.rsvpInfo;
			const bars = state.bars.map( _place => {
				let place = Object.assign({}, _place);
		    let stat = rsvpInfo.find( item => place.id === item.barId );
		    place.amGoing = stat && stat.amGoing || false;
		    place.totalGoing = stat && stat.totalGoing || 0;
		    return place;
		  });

			return Object.assign({}, state, 
				{ 
					bars
				});
		}

		default:
			return state;
	}
}