import ProfileModel from '../Model/ProfileModel';
   
module.exports.Controller = (app)=>{

        app.get('/GetProfile/:UserName', function(req, res) {
                // any logic goes here
            let UserName=req.param('UserName');
            let ProfileData=ProfileModel.find({EmailID:UserName},function (err, ProfileGet){
                //const Profile={FullName:"Benhur Davies",NickName:"Beno",EmailID:"benhur.davies@cognizant.com",PhoneNo:"9961786345"}
                let Profile={};
                if(ProfileGet.length>0)
                {
                    Profile=ProfileGet[0];
                }
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(Profile));
            });
        });
    };
