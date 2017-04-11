import ProfileModel from '../Model/ProfileModel';
import bodyParser from 'body-parser';
   
module.exports.Controller = (app)=>{

app.use(bodyParser.json());

        app.get('/ApiGetProfile/:UserName', function(req, res) {
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

         app.post('/ApiUpdateProfile', function(req, res) {
             
             let ProfileData=req.body;
             if(ProfileData.EmailID.trim()=="") //validating
             {
                 let Err= { 
                    name:        "Data Error", 
                    level:       "Show Stopper", 
                    message:     "Error detected. EmailId cant be Empty", 
                    htmlMessage: "Error detected. EmailId cant be Empty",
                    toString:    function(){return this.name + ": " + this.message;}
                };
                 throw Err;
             }
             ProfileModel.findOne({EmailID:ProfileData.EmailID},(err, Profile)=>{
                 if(!err)
                 {
                     if(!Profile)
                     {
                         Profile=new ProfileModel();
                         Profile.CreateDate=new Date();
                     }
                     Profile.FullName=ProfileData.FullName;
                     Profile.NickName=ProfileData.NickName;
                     Profile.EmailID=ProfileData.EmailID;
                     Profile.PhoneNo=ProfileData.PhoneNo;
                     Profile.UpdateDate=new Date();
                     Profile.save(function (err, Profile) {
                        if (err) return console.error(err);
                            console.log("Data saved in Db");
                            res.setHeader('Content-Type', 'application/json');
                            res.send(JSON.stringify(Profile));
                        });
                 }
             })
        });
    };
