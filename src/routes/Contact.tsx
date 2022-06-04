import React from 'react';
import { Helmet } from "react-helmet";
import loadable from '@loadable/component'

const ContactPage = loadable(() => import('../components/contactPage/ContactPage'));

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact - Bilel Moussa</title>
                <meta name="description" content="Bilel Moussa a Web Developer &amp; Freelancer with 4+ years of experience - For further information, please do not hesitate to contact me." />
                <link rel="canonical" href="https://www.bilel-moussa.com/contact" />
            </Helmet>
            <ContactPage />
        </>
    )
}
