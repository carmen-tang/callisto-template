import React, { Fragment, Component } from 'react';
import '../scss/main.scss';

import Head from 'next/head';
import Header from '../components/Header';
import HeaderSection from '../components/HeaderSection';
import Hero from '../components/Hero';
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
        <Footer />
      </div>
    )
  }
}

export default Index;
