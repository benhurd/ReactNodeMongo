import axios from 'axios';

class ProfileApi{

    static GetProfile(username)
    {
        debugger;
        let Apidata=axios.get('/GetProfile/'+encodeURI(username));
        return Apidata;
    }
}

export default ProfileApi;