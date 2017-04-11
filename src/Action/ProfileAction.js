import * as Types from './ActionType';
import ProfileApi from '../Api/ProfileApi';

export function UpdateProfileSuccess(Profile)
{
    return{type:Types.UPDATE_PROFILE_SUCCESS,Profile};
}

export function LoadProfileSuccess(Profile)
{
    return{type:Types.GET_PROFILE_SUCCESS,Profile};
}

export function LoadProfile(UserName)
{
    return function(dispatch)
    {
        return ProfileApi.GetProfile(UserName)
        .then(x=>{
            dispatch(LoadProfileSuccess(x.data));
        }).catch(error=>{
            throw(error);
        });
    };
}

export function UpdateProfile(Profile)
{
    return function(dispatch)
    {
        return ProfileApi.UpdateProfile(Profile)
        .then(x=>{
            dispatch(UpdateProfileSuccess(x.data));
        }).catch(error=>{
            throw(error);
        });
    };
}
