import React from 'react';
import {} from './style.less';

class App extends React.Component {

	constructor() {
		super();

		this.state = {count: 1};
	}

	tick() {
		this.setState({count: this.state.count + 1});
	}

	render() {
		return <div onClick={this.tick.bind(this)}>Clicks: {this.state.count}</div>;
	}
}

export default App;