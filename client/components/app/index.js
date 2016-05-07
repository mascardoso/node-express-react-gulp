import React from 'react';

class App extends React.Component {

	constructor() {
		super();

		this.state = {count: 0};
	}

	tick() {
		this.setState({count: this.state.count + 1});
	}

	render() {
		return <div onClick={this.tick.bind(this)}>Clicks: {this.state.count}</div>;
	}
}

export default App;