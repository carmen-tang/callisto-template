import React, { Component } from 'react';

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

  	const styling = {
  	  backgroundImage: "url('/static/hero.jpg')",
  	  width:"100%",
  	  backgroundSize: "cover",
  	  backgroundRepeat: "no-repeat"
  	}

    return (
      <div id="hero" style={styling}>
        test
      </div>
    )
  }
}

export default Hero;
