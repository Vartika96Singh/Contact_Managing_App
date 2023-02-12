import React from "react";
//import DeleteIcon from '@mui/icons-material/Delete';

const ContactCard=(props)=>{
    const {id, name, email} = props.contact;
    return(
        <div className='item'>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </div>
                <button className='ui button red'
                onClick={()=>props.clickHandler(id)}>Delete</button>
            </div>
           
    )
}
export default ContactCard;