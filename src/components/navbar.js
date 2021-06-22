import React,{useState , useEffect} from 'react'
import {Link} from 'react-router-dom';
import '../components/navbar.css';
const Navbar = () => {
    const [menu,setMenu]=useState()
  
    const GET_ALL_MENUS = `
    query{
        allNavbars{
          Menu
        }
      }`;
    const getMenus = async() =>{
        const response =await fetch('http://localhost:3000/admin/api',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: GET_ALL_MENUS,
            }),}).then(result => result.json());
        //const res = await response.json()
        //console.log(response.data.allPosts);
        const resp = response.data.allNavbars
        
        setMenu(resp);
        
    }
    
    useEffect(() => {
        getMenus();
    },[])
    
    return (
        <>
        <div className="main-nav">
        {
        menu && menu.map((items,index)=>
           
          <Link to={items.Menu}>
          <div>{items.Menu}</div></Link>
           )
           
           }
           
        </div>
        </>
    )
}

export default Navbar;