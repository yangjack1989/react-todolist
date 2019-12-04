import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/todos'
import Header from './components/header'
import AddTodo from './components/addTodo'
import About from './components/pages/about'
import uuid from 'uuid';
import Axios from 'axios';
//import { ReactComponent } from '*.svg';



class App extends React.Component{
  state = {
    todos:[
    

      /* {
        id: uuid.v4(),
        title:'buy noodles',
        completed:false
      },
      {
        id: uuid.v4(),
        title:'clean room',
        completed:false
      },
      {
        id: uuid.v4(),
        title:'reading a book',
        completed:false
      } */
    ]
  }
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10')
         .then(res=>this.setState({todos:res.data}))
          
  }

  markComplete=(id)=>{
    this.setState({ todos: this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo
    })})
  }

  delTodo=(id)=>{
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then(res=>this.setState({ todos: [...this.state.todos.filter(todo=>todo.id!==id)]  
          }))
          
  }
  addTodo=(title)=>{
    const newTodo={
      id:uuid.v4(),
      title:title,
      completed:false
    } 
    Axios.post('https://jsonplaceholder.typicode.com/todos',newTodo
              )
         .then(res=>this.setState({todos:[...this.state.todos,res.data]}))
    
  }
  render(){
    
    return(
    <Router>
    <div className="App">
      <div className='container'>
        <Header />
        <Route exact path='/' render={props=>(
          <React.Fragment>
            <AddTodo  addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </React.Fragment>
        )}/>
        <Route path='/about' component={About}/>
        
      </div>
      
    </div>
    </Router>
    )
  };
}

export default App;
