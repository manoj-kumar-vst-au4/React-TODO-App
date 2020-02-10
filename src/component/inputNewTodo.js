import React from "react";

class UserInput extends React.Component{
    

    render(){
        return(
            <div className="  border border-light bg-light shadow py-3 px-3 rounded-lg ">
                <input type="text"   className="form-control border border-info" placeholder="Write your todo..." onChange={(event)=> this.props.userInput(event.target.value)}></input>
            </div>
        )
    }
}

export default UserInput;
