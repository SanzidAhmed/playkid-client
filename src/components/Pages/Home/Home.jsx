import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Category from './Category/Category';
import PageTitle from '../PageTitle/PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home || PlayKid"></PageTitle>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;