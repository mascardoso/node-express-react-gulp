import React from 'react';
import Request from 'request';

class Meta extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<meta name="description" content={this.props.meta.description} />
		);
	}

}

export default Meta;