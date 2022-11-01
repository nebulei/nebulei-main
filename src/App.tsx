import { Route, Routes } from "react-router-dom";

import NotFound from "./404";
import Home from "./Home/index";
import Login from "./Login/index";
import Register from "./Register/index";



function App() {
  return (
    <div id='App'>

      <Routes>
          <Route path={'*'} element={<NotFound />} />
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
      </Routes>

    </div>
  );
};

export default App;