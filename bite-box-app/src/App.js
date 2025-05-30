import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Apps from './components/Apps';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
    </Routes>
    <Routes>
      <Route path="/app" element={<Apps/>}>

      </Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
