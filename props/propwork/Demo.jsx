function Name() {



    const no=()=>
    {
  fetch('http://localhost:9090/product/save',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                name:"renger"
            })
        })
        .then((re)=>{console.log("this: "+re.status)})
        .then((data)=>{console.log("Response: "+data.status);})
        .catch((err)=>{console.log(err);
        })
    }
    return(
        <>
        <button onClick={no}>send data</button>
        
        </>
    )
    
}
export default Name