import React from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component'

const AboutPage = loadable(() => import('../components/aboutPage/AboutPage'));


export default function About() {
    return (
        <>
            <Helmet>
                <title>About - Bilel Moussa</title>
                <meta name="description" content="I'm a Web Developer and a Freelancer, based in Tunisia. After taking online courses in web developement i started working as web master." />
                <link rel="canonical" href="https://www.bilel-moussa.com/about" />
            </Helmet>
            <AboutPage />
        </>
    )
}
