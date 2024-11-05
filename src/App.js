import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter basename='/product'>
      <Routes>
         <Route path="/" element={ <Home />}/>
      </Routes>
    </BrowserRouter>
)
}

export default App;
