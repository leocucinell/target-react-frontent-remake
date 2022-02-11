import './App.css';
/* Third Party components */
//React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Redux

/* Pages */
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
