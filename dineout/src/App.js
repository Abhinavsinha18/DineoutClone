import AllRoutes from "./All Routes/AllRoutes";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/LoginSignup/Login";
import Signup from "./Components/LoginSignup/signup";
import { useState } from "react";
import HomeNav from "./Components/HomeNav/HomeNav";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [login, setLogin] = useState(true);

  return (
    <div className="App">
      {/* <Navbar setLogin={setLogin} login={login} /> */}
      <HomeNav
        setLogin={setLogin}
        login={login}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
      {login &&
        (isLogin ? (
          <Login
            isLogin={isLogin}
            setLogin={setLogin}
            setIsLogin={setIsLogin}
          />
        ) : (
          <Signup
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            setLogin={setLogin}
          />
        ))}
      <AllRoutes />
    </div>
  );
}

export default App;
