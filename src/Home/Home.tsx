import { Helmet } from "react-helmet";

import Navbar from '../components/Navbar';
import HomeHero from './partials/HomeHero/index';


function Home() {

  return (
    <div id='Home'>

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

      <Navbar />
        
        <HomeHero />
        
    </div>
  );
};

export default Home;