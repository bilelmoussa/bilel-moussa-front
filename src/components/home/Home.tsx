import React from 'react'
import loadable from '@loadable/component'
import LandingPage from '../landingPage/LandingPage'

const MyPortfolio = loadable(() => import('../myPortfolio/MyPortfolio'));
const AboutMe = loadable(() => import('../aboutMe/AboutMe'));
const MainSkills = loadable(() => import('../mainSkills/MainSkills'));
const ContactMe = loadable(() => import('../contactMe/ContactMe'));


export default function Home() {
    return (
        <>
            <LandingPage />
            <MyPortfolio />
            <AboutMe />
            <MainSkills />
            <ContactMe />
        </>
    )
}
