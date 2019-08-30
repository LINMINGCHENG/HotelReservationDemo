import React from 'react'
import Hero from '../Components/Hero';
import {Link} from 'react-router-dom';
import Banner from '../Components/Banner';

export default function ErrorPage() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
                <Link to='/' className='btn-primary'>
                    return Home
                </Link>

            </Banner>
        </Hero>
    )
}
