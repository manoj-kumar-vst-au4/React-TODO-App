import React from 'react';
import UserInput from "./component/inputNewTodo";
import List from "./component/todoList";

class App extends React.Component{
  state = {
    input : "",
    list :[]
  }

  render(){
    return (
      <div className="container-fluid ">
        <h1 className="jumbotron text-center bg-dark text-white">TODO-APP</h1>
        < UserInput />
        <List/>
        
      </div>
    );
  }
}

export default App;
