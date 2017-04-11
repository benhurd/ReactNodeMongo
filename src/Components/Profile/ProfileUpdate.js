import React,{PropTypes} from 'react';
import {connect} from'react-redux';
import * as ProfileAction from '../../Action/ProfileAction';
import {bindActionCreators} from 'redux';
import TextInput from '../Common/TextInput';
import toaster from 'toastr';

class ProfileUpdate extends React.Component{
    constructor(props,context)
    {
        super(props,context);
         this.state={
             Profile:Object.assign({},this.props.Profile),
             errors:{},
             saving:false
         };

         this.UpdateProfileState=this.UpdateProfileState.bind(this);
         this.SaveProfile=this.SaveProfile.bind(this);
    }

    UpdateProfileState(event)
    {
        const field=event.target.name;
        let Profile=this.state.Profile;
        Profile[field]=event.target.value;
        return this.setState({Profile:Profile});
    }


    SaveProfile(event)
    {
        event.preventDefault();
        this.setState({saving:true});
        this.props.actions.UpdateProfile(this.state.Profile)
            .then(()=>{
                this.setState({saving:false});
                toaster.success('Profile Saved');
            })
            .catch(err=>{
                toaster.error(err.response.data);
                this.setState({saving:false});
            });
    }

    // redirect(){
    //     this.setState({saving:false});
    //     toaster.success('Profile Saved');
    // }

    render(){
        return(
             <form>
            <h1>Profile</h1>
            <TextInput
                name="FullName"
                label="Full Name"
                value={this.state.Profile.FullName}
                onChange={this.UpdateProfileState}
                error={this.state.errors.title}/>

            <TextInput
                name="NickName"
                label="Nick Name"
                value={this.state.Profile.NickName}
                onChange={this.UpdateProfileState}
                error={this.state.errors.category}/>
            
             <TextInput
                name="EmailID"
                label="Email ID"
                value={this.state.Profile.EmailID}
                onChange={this.UpdateProfileState}
                error={this.state.errors.length}/>

            <TextInput
                name="PhoneNo"
                label="Phone No"
                value={this.state.Profile.PhoneNo}
                onChange={this.UpdateProfileState}
                error={this.state.errors.length}/>
            
            <input
                type="submit"
                disabled={this.state.saving}
                value={this.state.saving?'Saving..':'Save'}
                className="btn btn-primary"
                onClick={this.SaveProfile}/>
        </form>
        );
    }
}

function mapStateToProps(state,ownProps){
    return {
        Profile:state.Profile
    };
}

function mapDispatchToProps(dispatch)
{
    return{
        actions:bindActionCreators(ProfileAction,dispatch)
    };
}

ProfileUpdate.propTypes={
    Profile:PropTypes.object.isRequired,
    actions:PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdate);