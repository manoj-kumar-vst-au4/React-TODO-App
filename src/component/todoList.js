import React from "react";

 class List extends React.Component{
     render(){
         return(
            <div className=" mt-3 ">
                <h3 className="text-center ">TODO List</h3>
                <hr/>
                <div>
                    { this.props.items.map((item, index) => {
                    return (
                            <div  >
                                <div className="card" style={{"width":"30%"}}>
                                    <div className="card-body py-1 rounded-lg shadow" >
                                    <p className="b3">{item}</p>
                                    </div>
                                </div>
                                <button className="btn btn-white border border-primary my-1">Edit</button>
                                <button className="btn btn-white ml-2 border border-danger my-1" onClick={()=>this.props.deleteItem(index) }>Delete</button>
                            </div>
                        );
                    }) }
                </div>
            </div>
            )
        }
    }

 export default List;
