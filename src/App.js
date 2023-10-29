import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Create from './Components/Create';
import EditUser from './Components/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path="/update/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
