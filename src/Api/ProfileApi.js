import axios from 'axios';

class ProfileApi{

    static GetProfile(username)
    {
        let Apidata=axios.get('/ApiGetProfile/'+encodeURI(username));
        return Apidata;
    }

    static UpdateProfile(Profile)
    {
        let Apidata=axios.post('/ApiUpdateProfile',Profile);
        return Apidata;
    } 
}


export default ProfileApi;