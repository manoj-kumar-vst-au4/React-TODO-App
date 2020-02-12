import React from "react";

 class List extends React.Component{
     render(){
         return(
            <div className=" mt-3 ">
                <h3 className="text-center ">TODO List</h3>
                
                <div>
                    <ul type="none" className="border border-dark bg-light rounded-lg pr-5 ">
                    { this.props.items.map((item, index) => {
                    return (
                            
                                <div className="card mt-2 border-dark mx-auto mb-2">
                                    <div className="card-body py-1 rounded-lg shadow d-flex bd-highlight" >
                                    <li className="b3 flex-grow-1 bd-highlight"><h5 className="pt-1">{item}</h5></li>
                                    <button className="btn btn-success border border-dark my-1 bd-highlight">Edit</button>
                                <button className="btn btn-danger ml-2 border border-dark my-1 bd-highlight" onClick={()=>this.props.deleteItem(index) }>Delete</button>
                                    </div>
                                </div>
                        );
                    }) }
                    </ul>
                </div>
            </div>
            )
        }
    }

 export default List;
