import axios from 'axios';
import { useEffect, useState } from 'react';

function Demo11(){
    const [sta,setSta]=useState([])
    useEffect(()=>{
       axios.get("http://localhost:9090/product/getAllProduct").then((res)=>{
        setSta(res.data)
             
       }).catch((err)=>console.log(err))
    },[])
    return(
        sta.map((res)=>(
            <h1 key={res.id}>{res.name}</h1>
        ))
    )
}
export default Demo11;