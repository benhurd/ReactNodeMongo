import * as Types from '../Action/ActionType';
import InitialState from './InitialState';

export default function ProfileReducer(state = InitialState.ProfileState ,action)
{
    debugger;
    switch(action.type)
    {
        case Types.GET_PROFILE_SUCCESS:
            return Object.assign({}, action.Profile);
           
        case Types.UPDATE_PROFILE_SUCCESS:
               return Object.assign({}, action.Profile);

        default:
            return state;
    }
}
