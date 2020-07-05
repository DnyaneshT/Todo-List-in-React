import React from 'react';
import PropTypes from 'prop-types';

class TodoItems extends React.Component{
    getStyle=()=>{
        return {
            display:"flex",
            padding:"10px",
            border:'1px black solid',
            margin: '5px',
            backgroundColor:"lightblue",
            textDecoration: this.props.TodoItem.completed ?'line-through':"none"
        }
    }

    render(){
        const {id,title} = this.props.TodoItem
        return(
            <div style ={this.getStyle()} >
                <div style={{cursor:"pointer"}} onClick={this.props.markComplete.bind(this,id)}>
                    {title }
                </div>
                <div style={{cursor:"pointer", padding:"0px 10px"}}>
                    <button style={buttonStyle} onClick={this.props.remove.bind(this,id)}>X</button>
                </div>
                
            </div>
        )
    }
}

TodoItems.propTypes={
    TodoItem : PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired,
}
const buttonStyle = {
    backgroundColor:"red",
    color:"white",
    padding:"0px 10px",
    border:" 1px solid black",
    borderRadius: "0%",
    justifyContents:"center",
    alignItems:"center"
}
// const styleItem={
//     padding:"10px",
//     border:'1px black solid',
//     margin: '5px',
//     backgroundColor:"lightblue"
// }
export default TodoItems;