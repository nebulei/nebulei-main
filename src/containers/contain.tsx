import { Route, Routes } from "react-router-dom";

import Home from "./Home/index";
import Auth from "./Auth/index";



const contain = () => {
  return (
    <div id='contain'>

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/auth'} element={<Auth />} />
      </Routes>
  
    </div>
  );
};

export default contain;