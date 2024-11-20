import React from "react";


class Demos extends React.Component{
    constructor(){
        super();
        this.state={initailValue:"welcome",name:"gokul"}
    }

    changeValue=()=>{
        this.setState({initailValue:"thanks "})
    }

        render(){
            return(
                <div> <h1>{this.state.initailValue},{this.state.name}</h1>
                <button onClick={this.changeValue}>click to change</button>
                </div>
                
            )
        }

}
export default Demos; 