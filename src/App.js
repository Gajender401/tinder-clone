import './App.css';
import Header from "./components/header"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import Chats from './pages/chats';

function App() {
  return (
    <div className='app' >
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/chats" element={<Chats />} />
      </Routes>
      <Routes>
        <Route path="/chats/:person" element={<Chats />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
