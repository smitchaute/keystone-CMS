/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React ,{useEffect, useState} from 'react';
// import image_upload from '../../image/60d17ec44211d42bfc99420c-certificate-the-ultimate-guide-to-rhcsa-certification-exam.jpg'
import '../components/blogpage.css'

const Blogpage = ()=> {
  const [users,setUsers]=useState()
  
    const GET_ALL_POSTS = `
    query{
        allPosts{
          title
          id
          imageUpload{
            filename
          }
      body
      status
        }
      }`;
    const getUsers = async() =>{
        const response =await fetch('http://localhost:3000/admin/api',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: GET_ALL_POSTS,
            }),}).then(result => result.json());
        //const res = await response.json()
        //console.log(response.data.allPosts);
        const res = response.data.allPosts
        
        setUsers(res);
        console.log(users);
        
    }
    
    useEffect(() => {
        getUsers();
    },[])
    return (
       <>
       <div style={{border: "1px red"}} className="container">
         
           {users && users.map((item,index)=>
           <div className="box">
           <div className="box-one" key={index}><h2>{item.title}</h2>
           <p className="para">{item.body}</p></div>
           <div className="box-two">
            <img src={`./image/${item.imageUpload.filename}`} alt="image"/></div> 
           </div>
           )
           }
           
           
           
       </div> 
       </>
    )
}

export default Blogpage;
