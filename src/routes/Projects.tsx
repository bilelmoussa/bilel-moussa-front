import React from 'react'
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";


export default function Projects() {
    return (
        <>
            <Helmet>
                <title>Portfolio - Bilel Moussa</title>
                <meta name="description" content="I have already built amazing things, this is a gallery of my projects." />
                <link rel="canonical" href="https://www.bilel-moussa.com/portfolio" />
            </Helmet>
            <Outlet />
        </>
    )
}
