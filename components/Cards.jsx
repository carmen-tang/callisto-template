import React, { Component } from 'react';

class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
	    <div className="cards">
			<div className="cards-row">
				<div className="third">
					<span className="serif">ad astra</span>
					<p>Mars still remains the astrobiology community's number one choice for 'nearest rock with life,' but there are many researchers who argue that the moons of Jupiter are better bets. In particular, Europa, Ganymede, and Callisto are all thought to hide vast oceans of liquid water beneath their icy, outer skins.</p>
					<button className="ghost">Onwards</button>
				</div>
				<div className="two-thirds">
					We must believe then, that as from hence we see Saturn and Jupiter; if we were in either of the Two, we should discover a great many Worlds which we perceive not; and that the Universe extends so in infinitum.
					<button class="swipe">
					  <div class="circle">
					    <span class="icon arrow"></span>
					  </div>
					  <p class="button-text">Onwards</p>
					</button>
				</div>
			</div>
	  	</div>
    )
  }
}

export default Cards;
