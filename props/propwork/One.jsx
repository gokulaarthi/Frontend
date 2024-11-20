import Two from "./Two";

function One(props){
    let names=["lion","tiger","goat"]
    return(
        <>
        <h1>This is  {props.val}</h1>
        <Two valu={names} />
        </>
    )
}
export default One