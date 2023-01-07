
import AllRoutes from './All Routes/AllRoutes';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/LoginSignup/Login";
import Signup from "./Components/LoginSignup/signup";
import { useState } from 'react';


function App() {
  
  const [isLogin,setIsLogin] = useState(true)
  const [login,setLogin] = useState(false)
  
  
  return (
    <div className="App">
      <Navbar setLogin={setLogin} />
      { login && (isLogin ? <Login setLogin={setLogin} setIsLogin={setIsLogin} /> : <Signup setIsLogin={setIsLogin} setLogin={setLogin}/>) }
      <AllRoutes />
    </div>
  );
}

export default App;
