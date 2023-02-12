import React from 'react';
//import AddIcon from '@mui/icons-material/Add';

class AddContact extends React.Component{
    state ={
        name:"",
        email:"",
    };

    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state)
        this.setState({name:"", email:""});
        console.log(this.state)
    };
    render(){
        return(
            <div className='ui main'>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
            <div className='field'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='name' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
            </div>
            <div className='field'>
            <label htmlFor="name">Email</label>
            <input type="text" name='email' placeholder='email' value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
            </div>
            <button className='btn-blue'>Add</button>

            </form>

            </div>
        )
    };
}
export default AddContact;
