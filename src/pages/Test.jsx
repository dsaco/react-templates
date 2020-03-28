import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setTest } from '../stores//reducers/testReducer';

class Test extends Component {
	set = () => {
		this.props.setTest(Date.now());
	};
	show = () => {
		console.log(this.props.msg);
	};
	render() {
		return (
			<div>
				<h1>test</h1>
				<button onClick={this.show}>show</button>
				<button onClick={this.set}>set</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	msg: state.test,
});

const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators({ setTest }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
