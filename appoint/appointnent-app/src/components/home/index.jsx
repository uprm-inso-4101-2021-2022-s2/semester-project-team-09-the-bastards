import { Hero } from '../hero';
import {Fragment } from 'react';
import { Info } from '../info';
import { TopRated } from '../topRated';
import { Specialties } from '../specialties';

export const Home = () => {
    return (
        <Fragment>
            <Hero />
            <Info />
            <Specialties/>
            <TopRated/>
        </Fragment>
    )

}