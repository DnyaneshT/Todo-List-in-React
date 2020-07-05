import React from 'react';

class Input extends React.Component{
    state={
        title:"",
        title2:""
    }
    handleChange=(e)=>{
        // const {value}=e.target
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleChange2=(e)=>{
        // const {title2}=e.target
        this.setState({
            title2:e.target.value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title:""})
        
    }

    render(){
        return(
            // <div >
                <form onSubmit={this.handleSubmit} style={{display:"flex",margin:"5px"}} >
                    <input type="text" name="title" value={this.state.title}
                    onChange={this.handleChange} 
                    style={{flex:"10", height:"100%",padding:"8px"}} placeholder="Enter your next task here...(title)"/> 


                    {/* <input type="text" name="title2" value={this.state.title2}
                    onChange={this.handleChange2} 
                    style={{flex:"10", height:"100%",padding:"8px"}} placeholder="Enter your next task here...(title2)"/>  */}
                    
                    {" "}
                    <input type="submit"  value="Add" style={{flex:"1", background:"green", color:"white"}} />
                </form>
            //  </div>
        )
    }
    
}
export default Input;