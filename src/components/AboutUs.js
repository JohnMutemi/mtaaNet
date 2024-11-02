import React from 'react';
import AboutUsHero from './AboutUsHero';
import AboutUsTextImage from './AboutUsTextImage';
import ExploreConnections from './ExploreConnections';
import ConnectivityParallax from './ConnectivityParallax';
import TeamMembers from './TeamMembers';

const AboutUs = () => {
  return (
    <div>
      <AboutUsHero />
      <AboutUsTextImage />
      <ExploreConnections />
      <ConnectivityParallax />
      <TeamMembers />
    </div>
  );
};

export default AboutUs;
