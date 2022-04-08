import { Hero } from '../hero';
import {Fragment } from 'react';
import { Info } from '../info';
import { TopRated } from '../topRated';

export const Home = () => {
    return (
        <Fragment>
            <Hero />
            <Info />
            <TopRated/>
        </Fragment>
    )

}