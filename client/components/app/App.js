import React from 'react';
import Request from 'request';
import Article from './article/Article';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {count: props.initialCount};
		this.tick = this.tick.bind(this);
	}

	componentDidMount(){
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
			<main>
				<Article />
				<br />
			  	<div onClick={this.tick}>
			    	Clicks: {this.state.count}
			  	</div>
		  		<p> Let the fun begin!!! </p>
		  		<p> Do i get an IP from an API? {this.state.test}</p>
			</main>
		);
	}

}

App.propTypes = { initialCount: React.PropTypes.number };
App.defaultProps = { initialCount: 2, test: '' };


export default App;