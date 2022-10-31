import { Route, Routes } from "react-router-dom";

import NotFound from "./404";
import Home from "./Home/index";
import Auth from "./Auth";



function App() {
  return (
    <div id='App'>

      <Routes>
          <Route path={'*'} element={<NotFound />} />
          <Route path={'/'} element={<Home />} />
          <Route path={'/auth'} element={<Auth />} />
      </Routes>

    </div>
  );
};

export default App;