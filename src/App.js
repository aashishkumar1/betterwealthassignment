import { Route, Routes } from 'react-router-dom';
import AddBlog from './components/AddBlog';
import Home from './components/Home';
import IndividualBlog from './components/IndividualBlog';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/addBlog' element={<AddBlog />}/>
        <Route path='/blogs/:id' element={<IndividualBlog />}/>
      </Routes>
    </div>
  );
}

export default App;
