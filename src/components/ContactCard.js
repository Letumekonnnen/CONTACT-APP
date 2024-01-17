import React from "react";
import user from '../images/user.jpg';

const ContactCard = (props) =>{
    const  {id, name, email} = props.Contacts;

    return(
        <div className = "item">
            <img className="ui avatarimage image" src={user} alt="user" 
              style={{ width: '50px', height: '50px' }} />
                <div className ="content">
                    <div className ="header">{name}</div>
                    <div>{email}</div>
                    
                </div>
                <i className = "trash alternate outline icon" style={{ float: 'right', color:"red"}}></i>
            </div>
    )
}
export default ContactCard;