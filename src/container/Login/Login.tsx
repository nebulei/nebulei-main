import { Helmet } from "react-helmet";

import Login from "./views/Login";



const Main = () => {
  return (
    <div id="Main">

      <Helmet>
        <title>
          Login to Nebulei
        </title>
        <meta name="description" content="
          Join Nebulei and be apart of something amazing.
        "/>
        <meta name="keywords" content="
          Login, Register, Nebulei, Signup, Engagement, Discussions, Research, Debates
        "/>
      </Helmet>


    <Login />
    </div>
  );
};

export default Main;