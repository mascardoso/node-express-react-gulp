import React from 'react';

class Content extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div><p>This is pure content CIAO {this.props.test}</p></div>
		);
	}
}


export default Content;