

import React from 'react'
import Head from 'next/head'
import LogoModelo from '../assets/modelo.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <LogoModelo />
      <h1>Modelo Inicial Para sites</h1>
      <p>Utilizado tutorial Rocketseat.</p>
      <h2>teste</h2>
    </Container>
  )
}

export default Home
