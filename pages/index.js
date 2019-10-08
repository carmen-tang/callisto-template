import React, { Fragment, Component } from 'react';
import '../scss/main.scss';

import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="content">
        <Head>
          <title>Callisto</title>
        </Head>
        <Header />
        <Hero />
        <Cards />
        <Footer />
      </div>
    )
  }
}

export default Index;
