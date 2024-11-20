import React from "react"; 

class Edss extends React.Component{

    constructor(){
        super();

        this.state=({num:0})
    }

    increment=()=>{
        this.setState({num:{num:+1}})
    }
    decrement=()=>{
        this.setState({num:+1})
    }
    start=()=>{
        this.setState({num:0})
    }
    

  render(){
    return(<>
        <h1>{this.state.names}</h1>

        <button onClick={this.increment}>click</button>
        </>
    
    )
  }
}

export default Edss