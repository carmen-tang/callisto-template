import React, { Component } from "react";
import PropTypes from "prop-types";
import Menu from "../components/Menu";
import MobileMenu from "../components/MobileMenu";

export default class HeaderSection extends Component {
	static propTypes = {
	};

	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		console.log('please22');
	}


	paymentOptionsById(id) {
		return this.props.paymentOptions.find(element => element.id === id);
	}

	render() {
		const { orders } = this.props;

		return (
			<div className="order-wrapper">
				okok
			</div>
		);
	}
}
