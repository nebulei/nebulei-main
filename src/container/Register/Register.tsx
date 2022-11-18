import { Helmet } from "react-helmet";

import Register from "./views/Register";



const Main = () => {
  return (
    <div id="Main">

      <Helmet>
        <title>
          Join Nebulei
        </title>
        <meta name="description" content="
          Join Nebulei and be apart of something amazing.
        "/>
        <meta name="keywords" content="
          Join, Register, Nebulei, Signup, Engagement, Discussions, Research, Debates
        "/>
      </Helmet>


    <Register />
    </div>
  );
};

export default Main;