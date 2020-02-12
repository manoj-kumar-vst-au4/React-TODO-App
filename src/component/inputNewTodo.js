import React from "react";

class UserInput extends React.Component{
    

    render(){
        return(
            <div className="  border border-dark bg-light  py-3 px-3 rounded-lg ">
                <input type="text" value={this.props.input} className="form-control border border-dark" placeholder="Write your todo..." onChange={(event)=> this.props.userInput(event.target.value)}></input>
            </div>
        )
    }
}

export default UserInput;
