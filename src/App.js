//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
//import { useState } from 'react';
import { Layout } from './components/Layout';
import { LayoutV2 } from './components/LayoutV2';
import Links from './pages/Links';
import Plan from './pages/Plan';

/*function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken(userToken) {

} */

function App() {
  //const token = getToken();
  //const [token, setToken] = useState(true);

  /* if (token) {
    return (
      <>
        <Login setToke={setToken} />
      </>
    );
  } */

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="links" element={<Links />} />
            <Route path="*" element={<NotFound />} />
            <Route path="plan" element={<Plan />} />
          </Route>

          {/* <Route  element={<LayoutV2 />}>

          </Route> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
