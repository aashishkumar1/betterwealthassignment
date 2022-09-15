import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const [inputs, setInputs] = useState({});    
    const navigate = useNavigate();

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);

      
    fetch("http://localhost:8080/blogs",{
        method: "POST",
        body: JSON.stringify(inputs),
        headers: {"Content-Type": "application/json"}
    });

      setInputs({});
      navigate('/');
    }

  return (
    <form onSubmit={handleSubmit}>
    <label>Blog title:
    <input 
      type="text" 
      name="title" 
      value={inputs.title || ""} 
      onChange={handleChange}
      required
    />
    </label>
    <label>Blog body:
      <textarea 
        type="text" 
        name="body" 
        value={inputs.body || ""} 
        onChange={handleChange}
        required
      />
      </label>
      <label>Blog author:
      <input 
        type="text" 
        name="author" 
        value={inputs.author || ""} 
        onChange={handleChange}
        required
      />
      </label>
      <input type="submit" />
  </form>
  )
}

export default AddBlog