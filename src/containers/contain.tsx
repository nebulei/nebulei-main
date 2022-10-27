import { Route, Routes } from "react-router-dom";

import Home from "./Home/index";


const contain = () => {
  return (
    <div id='contain'>

      <Routes>
          <Route path={'/'} element={<Home />} />
      </Routes>
  
    </div>
  );
};

export default contain;