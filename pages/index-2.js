import React, { Fragment, Component } from 'react'
import '../scss/main.scss'

import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="content">
        <Head>
          <title>Callisto</title>
          <meta name="description" content="" />
        </Head>
        <Header header={this.state.header} nav={this.state.nav} />
        <Hero />
        <Footer />
      </div>
    )
  }
}

export default HomePage
