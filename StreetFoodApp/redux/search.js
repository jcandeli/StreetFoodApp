// Constants
export const constants = {
    SET_DISTANCE: 'SET_DISTANCE',
    SET_LOCATION: 'SET_LOCATION',
    FETCH_SEARCH: 'FETCH_SEARCH'
};


// Action Creators
export const actions = {
    setDistance: (distance) => ({
        type: constants.SET_DISTANCE,
        distance
    }),

    setLocation: (location) => ({
        type: constants.SET_LOCATION,
        location
    }),

    fetchSearch: (distance, location) => ({
        type: constants.SET_DISTANCE,
        distance,
        location
    }),
};

// default state
export const defaultState = {
    distance: 0.5,
    location: {
        lat: 34.078949,
        long: -118.2123
    }
};


export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
    case constants.SET_DISTANCE:
        return { ...state, distance: action.distance };

    case constants.SET_LOCATION:
        return { ...state, location: action.location };

    default:
        return state;
    }
}