import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
	render() {
		console.log(this.props, '111');
		console.log(this.props.children, '111');
		return (
			<NavLink activeClassName="chy" className="list-group-item" {...this.props}/>
		)
	}
}
