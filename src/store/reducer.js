import * as actionTypes from './actions';
import { updateObject } from '../util/UpdateObject';

const initialState = {
    isLoaded: false,
    isMobile: false
};

const setAppLoaded = (state, action) => {
    return updateObject(state, { isLoaded: action.isLoaded });
}

const setDeviceType = (state, action) => {
    return updateObject(state, { isMobile: action.isMobile });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_APP_LOADED: return setAppLoaded(state, action);
        case actionTypes.SET_DEVICE_TYPE: return setDeviceType(state, action);
        default: return state;
    }
};

export default reducer;