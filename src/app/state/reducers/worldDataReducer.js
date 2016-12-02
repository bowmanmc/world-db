import * as types from '../actions/worldDataActionTypes';

export default function worldDataReducer(state = [], action) {
    switch (action.type) {
        case types.WORLD_DATA_LOAD_SUCCESS:
            return action.worldData;
        default:
            return state;
    }
}
