import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    render(){
        return this.props.todos.map((todo,i)=>(
            <div key={todo.id}>
                {/* <h3>{todo.id}</h3> */}
                <TodoItem  TodoItem={todo} markComplete={this.props.markComplete} remove={this.props.remove}/> 
            </div>
        ))
    }
}

Todos.propTypes = {
    todos:PropTypes.array.isRequired,
    markComplete:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired,
}
export default Todos;
