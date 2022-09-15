import React from 'react'
import { Link } from 'react-router-dom'
import './BlogList.css'

const BlogList = ({data}) => {

    if(data.length === 0)
    {
        return <h1 style={{textAlign:"center"}}>No Blog Found</h1>
    }

  return (
    <div className='container'>
        <h2>All Blogs</h2>
     {
            data.map((item) => {
                return (
                    <div key={item.id} className="box">
                        <Link to={`/blogs/${item.id}`}>
                            <h3>{item.title}</h3>
                            <p>Author: {item.author}</p>
                        </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default BlogList