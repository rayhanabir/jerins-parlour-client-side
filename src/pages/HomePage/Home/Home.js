import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Feedback from '../Feedback/Feedback';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
           <NavigationBar></NavigationBar> 
           <TopBanner></TopBanner>
           <Services></Services>
           <Treatment></Treatment>
           <Feedback></Feedback>
        </div>
    );
};

export default Home;