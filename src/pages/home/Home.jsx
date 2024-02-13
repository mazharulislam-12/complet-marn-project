import React from 'react';
import Banner from '../../components/Banner';
import Categories from './Categories';
import SpecialDishes from './SpecialDishes';
import Testimonials from './Testimonials';
import Service from './Service';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <SpecialDishes></SpecialDishes>
            <Testimonials></Testimonials>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;