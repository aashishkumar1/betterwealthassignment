import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(()=>{

        const getData = async() => {
            let response = await fetch('http://localhost:8080/blogs');
            let dt = await response.json();
            setData(dt);
            setLoading(false);
        }
        getData();
    },[])

  return (
    <div >
        {loading ? <h1 style={{textAlign:"center"}}>Loading...</h1> : <BlogList data={data}/>}
    </div>
  )
}

export default Home