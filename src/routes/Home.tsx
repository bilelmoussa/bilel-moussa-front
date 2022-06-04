import React from 'react'
import { Helmet } from "react-helmet"

import AppLayout from '../layout/AppLayout'
import HomeComponents from '../components/home/Home'


export default function Home() {
  return (
    <>
      <Helmet>
        <title>Bilel Moussa - Web Developer</title>
        <meta name="description"
          content="Bilel Moussa a Web Developer &amp; Freelancer with 4+ years of well-rounded experience in Javascript, Php and UI/UX Design, As a freelancer, I collaborate with web agencies, companies, startups and individuals to bring their ideas to life." />
        <link rel="canonical" href="https://www.bilel-moussa.com" />
      </Helmet>
      <AppLayout>
        <HomeComponents />
      </AppLayout>
    </>
  )
}