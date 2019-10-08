import React, { Component } from 'react';

const surface = require("../static/surface.jpg");

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
	    <div className="article">
			<p className="article-title">orbit and rotation</p>
			<div className="next-article">
				<div className="next-article-left">
					<p className="up-next">Up Next</p>
					<p className="next-article-title">surface features</p>
					<button class="article-arrow swipe">
					  	<div class="circle">
					    	<span class="icon arrow"></span>
					  	</div>
					</button>
				</div>
				<div className="next-article-right">
					<img src={surface} />
				</div>
			</div>
	  	</div>
    )
  }
}

export default Article;
