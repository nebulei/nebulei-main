import { Route, Routes } from "react-router-dom";

import { Helmet } from "react-helmet";

import Home from './containers/Home/index';
import NotFound from './containers/404';



function App() {
  return (
    <div id='App'>

      <Helmet>
        <title>
          Nebulei
        </title>
        <meta name="description" content="
          A meaningful social-network that creates the most productive engagements with one-another for a bigger purpose
        "/>
        <meta name="keywords" content="
          Nebulei, Collaboration, Invention, Creation, Engagement, Discussions, Research, Debates
        "/>
      </Helmet>

      <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'*'} element={<NotFound />} />
      </Routes>

    </div>
  );
};

export default App;