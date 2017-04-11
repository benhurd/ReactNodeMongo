import mongoose from 'mongoose';
import Config from './Config';

let PSchema = mongoose.Schema
,ProfileSchema=new PSchema({
    FullName:String,
    NickName:String,
    EmailID:String,
    PhoneNo:String,
    CreateDate:Date,
    UpdateDate:Date
},{ collection: 'Profiles' });

// mongoose.set('debug', function(coll, method, query, doc, options) {
//     let set = {
//         coll: coll,
//         method: method,
//         query: query,
//         doc: doc,
//         options: options
//     };

//     console.log(JSON.stringify(set));
// });

mongoose.connect(Config.DbConnection);

module.exports = mongoose.model('Profiles', ProfileSchema);