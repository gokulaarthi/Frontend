import React from 'react';
import Props2 from './Proops2';
class Pro extends React.Component{
   render(){
    let namee={
     name:"gokul",
     age:21   
    }
    return(
    <>
        <h1>my name is {this.props.name1}</h1>

        <Props2  nmae={namee}/> 

        </>
    )
   }
}
export default Pro;