import React from "react";

class Props2 extends React.Component{
    render(){
        return(
<>
            <h1>my name is {this.props.nmae.name} </h1>
            <h4>my age is {this.props.nmae.age}</h4>
            </>       )
    }
}
export default Props2;