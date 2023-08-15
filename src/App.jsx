import Signup from './Signup';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct the typo here

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>

<BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup />}> </Route>
          <Route path='/login' element={<Login />}> </Route>
        </Routes>
</BrowserRouter>

    </div>
    
  );
}

export default App
