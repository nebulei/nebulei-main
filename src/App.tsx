import { Route, Routes } from "react-router-dom";

import NotFound from "./container/404";
import Home from "./container/Home/index";
import Login from "./container/Login/index";
import Register from "./container/Register/index";



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