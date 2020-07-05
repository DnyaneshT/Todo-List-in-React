import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './Components/Todos';
import Header from './Components/Layout/Header';
import Input from './Components/Layout/Input';
import About from './Pages/About';
import axios from 'axios';
import './App.css';

class  App extends React.Component {
  state={
    todos:[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then((result) => {
      // console.log(result.json())
      // return result.json()
      this.setState({todos:result.data})
    }).catch((err) => {
      console.log("ERROR");
    });
  }

  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) })

  }

  remove=(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(result => {
      this.setState({ todos:[...this.state.todos.filter(todo => {return todo.id!==id})]
    })
    }).catch((err) => {
      console.log("ERROR in Remove")
    });

  //   this.setState({ todos:[...this.state.todos.filter(todo => 
  //     {return todo.id!==id}
  //   )]
  // });
  }

  addTodo=(title)=>{
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed:false
    }).then((result) => {
      this.setState({ todos:[...this.state.todos, result.data]});
    }).catch((err) => {
      console.log("Error in post")
    });

    // const newTodo = {
    //   id:this.state.todos.length+1,
    //   title,
    //   completed:false
    // }
    // this.setState({ todos:[...this.state.todos, newTodo]});
  }

  render(){
    return (
      <Router>
        <div className="container">
          <Header></Header>
          <Route exact path='/'  render={props=>(
            <>
              <Input addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete ={this.markComplete} remove={this.remove}/>
            </>
          )} />
          <Route path="/about" component={About}/>
        </div>
      </Router>
      
    );
  }
  
}

export default App;
