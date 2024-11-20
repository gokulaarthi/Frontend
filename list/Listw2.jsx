// import { Key } from "@mui/icons-material"
function namee(props) {

    const dats=props.datass

    const ioo=dats.map((s,index)=>{
        console.log({s});
        const io=" "
       
      return  <li  Key={index}>{s}{index}{io}</li>

    })
    return(


        <ul>{ioo}</ul>

    )
    
}

export default namee