import React from 'react'
import { Helmet } from "react-helmet"
import loadable from '@loadable/component'

const NotFoundComponent = loadable(() => import('../components/notFound/NotFound'));


export default function NotFoundPage() {
    return (
        <>
            <Helmet>
                <title>404 - Bilel Moussa</title>
                <meta name="description" content="The page you are looking for might have been removed had its name changed or is temporarily unavailable." />
                <link rel="canonical" href="https://www.bilel-moussa.com/404" />
            </Helmet>
            <NotFoundComponent />
        </>
    )
}
