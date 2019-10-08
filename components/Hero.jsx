import React, { Component } from 'react';

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

  	const styling = {
  	  backgroundImage: "url('/static/mountains.jpg')",
  	  width: "100%",
  	  backgroundSize: "cover",
  	  backgroundRepeat: "no-repeat",
  	  backgroundPosition: "top center"
  	}

    return (
      <div id="hero" style={styling}>
		<h1>Callisto</h1>
		<p>A modern, responsive starter template built with React, Next.js, and SASS.</p>
      </div>
    )
  }
}

export default Hero;
