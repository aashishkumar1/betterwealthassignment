import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './IndividualBlog.css'

const IndividualBlog = () => {
    const [data,setData] = useState({
        title:'',
        body:'',
        author:''
    });
    const [loading,setLoading] = useState(true);

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{

        fetch(`http://localhost:8080/blogs/${id}`)
        .then((res)=>res.json())
        .then((dt)=>setData(prevState=>{
            return { ...prevState, title:dt.title, body:dt.body, author:dt.author }
        }))
        setLoading(false);
    },[]);

    const deleteHandler = (id) => {

        fetch(`http://localhost:8080/blogs/${id}`,{
            method: 'DELETE'
        });
        navigate('/');
     
    }

  return (
    <>
    {loading ? <h1 style={{textAlign:"center"}}>Loading...</h1> :
     <div className='ind'>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <h4>Author: {data.author}</h4>
        <button onClick={() => deleteHandler(id)}>Delete</button>
    </div>    
    }
    </>
  )
}

export default IndividualBlog