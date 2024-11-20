const { useState, useEffect } = require("react");

function Demos(){
const [user1,setUser1]=useState("user1");
const [user2,setUser2]=useState("user2");
const [user3,setUser3]=useState("user3");
const [user4,setUser4]=useState("user4");
const [user5,setUser5]=useState("user5");

useEffect(()=>{setTimeout(() => { alert("WElcome")}, 1000)},[user1,user2,user3])

function user1Change(){
    setUser1("users10")
}
function user2Change(){
    setUser2("users20")
}
function user3Change(){
    setUser3("users30")
}
function user4Change(){
    setUser4("users40")
}
function user5Change(){
    setUser5("users50")
}
return(

    <>
        <h1>{user1}</h1>
        <button onClick={user1Change}>one change</button>
        <h1>{user2}</h1>
        <button onClick={user2Change}>one change</button>
        <h1>{user3}</h1>
        <button onClick={user3Change}>one change</button>
        <h1>{user4}</h1>
        <button onClick={user4Change}>one change</button>
        <h1>{user5}</h1>
        <button onClick={user5Change}>one change</button>

     </>
    
)
}
export default Demos;