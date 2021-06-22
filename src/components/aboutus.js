import React,{useEffect,useState} from 'react'
import '../components/aboutus.css';
import Navbar from './navbar';
const Aboutus = () =>{
    const [data,setData]=useState()
  
    const GET_ALL_DATA = `
    query{
        allAboutuses{
          title
          body
          imageUpload{
            filename
          }
        }
      }`;
    const getData = async() =>{
        const response_two =await fetch('http://localhost:3000/admin/api',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: GET_ALL_DATA,
            }),}).then(result => result.json());
        //const res = await response.json()
        //console.log(response.data.allPosts);
        const respond = response_two.data.allAboutuses
        console.log("gsab"+respond)
        setData(respond);
        
    }
    
    useEffect(() => {
        getData();
    },[])
    return (
       <>
       <div style={{border: "1px red"}} className="container-one">
       
           {data && data.map((e,index)=>
           <div className="box">
             <div className="box-one">
              <img src={`./image/${e.imageUpload.filename}`} alt="image"/>
             </div> 
           
           <div className="box-two" key={index}><h2>{e.title}</h2>
           <p className="para">{e.body}</p></div>
           </div>
           )
           }
           
           
           
       </div> 
       </>
    )

}

export default Aboutus;
