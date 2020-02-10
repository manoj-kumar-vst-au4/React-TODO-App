import React from 'react';
import UserInput from "./component/inputNewTodo";
import List from "./component/todoList";

class App extends React.Component{
  state = {
    input : "",
    list :[]
  }

  addTodoDataToList = (user) => {
    let users = this.state.list.slice();
    users.push(user);
    this.setState({
      list: users,
      input:""
    });
  }

  getUserData = (input)=> {
    this.addTodoDataToList(input)
  }

  delete = (key) => {
    const filteredItems = this.state.list.filter((item, index) => {
      return index !== key
    })
    this.setState({
      list: filteredItems,
    })
  }

  render(){
    return (
      <div className="container mt-4">
        < UserInput
         userInput={(input) => this.setState({input:input})}
           getUserData ={(user)=>this.addTodoDataToList(user)}
        />
        <div className="container">
        <button className="btn btn-white mt-2 border border-success" onClick={() => this.getUserData(this.state.input)}>Add to list</button>
        </div>
        <List
          items ={this.state.list}
          deleteItem ={(index)=> this.delete(index)}
        />
        
      </div>
    );
  }
}

export default App;
