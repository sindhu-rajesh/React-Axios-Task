 import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Create from './Components/Create';
import Edit from './Components/Edit';
import Products from './Components/Products';
import './App.css'
  
  const App = () => {
    // eslint-disable-next-line no-undef
    const[id,setId] = useState(0)
    return (
      <div>
        <BrowserRouter>
        <div>
          <Navbar />
        </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/edit/:id' element={<Edit id={id} setId={setId}/>} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
  

  export default App;
  
