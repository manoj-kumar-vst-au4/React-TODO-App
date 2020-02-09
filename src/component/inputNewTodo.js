import React from "react";

class UserInput extends React.Component{
    render(){
        return(
            <div className=" container border border-secondary bg-light shadow py-3 px-3 rounded-lg">
                <input type="text"   className="form-control " placeholder="Write your todo..."></input>
                <button className="btn btn-success mt-2">Submit</button>
            </div>
        )
    }
}

export default UserInput;
