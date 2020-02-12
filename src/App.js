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
      input:"",
      isEdit: false
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

  editItem = (key) =>{
    const filteredItems = this.state.list.filter((item, index) => {
      return index !== key
    })

    const selectedItem = this.state.list.find(item => this.state.list.indexOf(item) === key);

    this.setState({
      list: filteredItems,
      input: selectedItem,
      isEdit: true
    })
  }


  clearList =()=>{
    this.setState({
      list:[]
    })
  }

  render(){
    return (
      <div className="container-fluid mt-4 ">
        <h1 className="text-center mb-5 bg-">TODO-APP</h1>
        < UserInput
          input={this.state.input}
          userInput={(input) => this.setState({input:input})}
          getUserData ={(user)=>this.addTodoDataToList(user)}
        />
        <div className="container text-center">
        
    <button className={!this.state.isEdit?"btn btn-primary mt-2 border border-dark":"btn btn-success mt-2 border border-dark"} onClick={() => this.getUserData(this.state.input)}>{!this.state.isEdit?"Add Item":"Edit Item"}</button>
            </div>
              <div className="row">
                <div className="col-md-4 offset-md-4">
                  <List
                    items ={this.state.list}
                    deleteItem ={(index)=> this.delete(index)}
                    clearList={this.clearList}
                    editItem ={this.editItem}
                    
                  />
                </div>
              </div>
      </div>
    );
  }
}

export default App;
