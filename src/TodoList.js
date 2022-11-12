import { Component } from "react";

export class TodoList extends Component {
    state = {
        userInput: '',
        todoList: []
    }

    onChangeEvent(e){
        this.setState({userInput: e});
    }

    addItem(input){
        if (input === ''){
            alert ("Please enter an action")
        } else{
        let listArray = this.state.todoList;
        listArray.push(input);
        this.setState({todoList: listArray, userInput: ''})
    }}

    deleteItem(){
        let listArray = this.state.todoList;
        listArray = [];
        this.setState({todoList: listArray});
    }

    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e){
        e.preventDefault();
    }

render() {
    return(
        <form onSubmit={this.onFormSubmit}>
        <div>
        <div>
          <input type="text" 
                placeholder="What are you going to do today?" onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                value={this.state.userInput}/>
                <button onClick={() => this.addItem(this.state.userInput)} className="add">+</button>
                <button onClick={() => this.deleteItem()} className="delete">-</button>
                <ul>
                {this.state.todoList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        {item}</li>
                ))}
                </ul>
                </div>
        </div>
        </form>

    )
}
}