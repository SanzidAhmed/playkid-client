import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Category from './Category/Category';
import PageTitle from '../PageTitle/PageTitle';
import Features from './Features/Features';
import Countdown from './Countdown/Countdown';
import FeatureProduct from './FeatureProduct/FeatureProduct';

const Home = () => {
    return (
        <div className=''> 
            <PageTitle title="Home || PlayKid"></PageTitle>
            <Banner></Banner>
            <Countdown duration= {15 * 24 * 60 * 60 * 1000}></Countdown>
            <Category></Category>
            <FeatureProduct></FeatureProduct>
            <Gallery></Gallery>
            <Features></Features>
        </div>
    );
};

export default Home;