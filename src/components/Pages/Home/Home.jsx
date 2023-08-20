import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Category from './Category/Category';
import PageTitle from '../PageTitle/PageTitle';
import Features from './Features/Features';
import Countdown from './Countdown/Countdown';

const Home = () => {
    return (
        <div className=''> 
            <PageTitle title="Home || PlayKid"></PageTitle>
            <Banner></Banner>
            <Features></Features>
            <Countdown duration= {15 * 24 * 60 * 60 * 1000}></Countdown>
            <Category></Category>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;