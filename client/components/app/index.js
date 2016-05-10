import React from 'react';
import Request from 'request';




class App extends React.Component {
	constructor() {
		super();

		this.state = {
			count: 0,
			test: ''
		};
	}


	componentDidMount(){
		/*Request({
			url: 'https://httpbin.org/get',
			json: true
		}, function(err, res, body){
			this.setState({test: body.origin});
		}).bind(this);*/

		Request({
			url: 'https://httpbin.org/get',
			json: true
		}, (err, res, body) => {
			this.setState({test: body.origin});
		});
	}

	tick() {
		this.setState({count: this.state.count + 1});
	}

	render() {

		return (
			<div>
				<div onClick={this.tick.bind(this)}>Clicks: {this.state.count}</div>
				<p>Origin: {this.state.test}</p>
			</div>
		);
	}
}

export default App;