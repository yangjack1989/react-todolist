import React, { Component } from 'react'

export class addTodo extends Component {
    state={
        
          title:''
        
    }
    onChange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title:''})
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} sytle='flex'>
                <input style={{flex:'10',padding:'5px'}} type='text' 
                name='title' placeholder='insert todo'  value={this.state.title} onChange={this.onChange}/>
                <input type='submit' value='submit' style={{flex:'1'}} className='btn'/>
            </form>
        )
    }
}

export default addTodo
