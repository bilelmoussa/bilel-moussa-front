import React from 'react'
import { Helmet } from "react-helmet"
import loadable from '@loadable/component'

const SkillsPage = loadable(() => import('../components/skillsPage/SkillsPage'));


export default function About() {
    return (
        <>
            <Helmet>
                <title>Skills - Bilel Moussa</title>
                <meta name="description" content="I've been coding for over 4 years. In that time I've worked with and picked up many things. Most of my work in react or react native. More recently, TypeScript and Docker" />
                <link rel="canonical" href="https://www.bilel-moussa.com/skills" />
            </Helmet>
            <SkillsPage />
        </>
    )
}
