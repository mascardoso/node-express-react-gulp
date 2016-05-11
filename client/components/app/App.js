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
			url: 'http://dev.hmc.nl/node/1?_format=json',
			json: true
		}, (err, res, body) => {

			console.log(err, res, body);

			this.setState({test: body.nid[0].value});
		});
	}

	tick() {
		this.setState({count: this.state.count + 1});
	}

	render() {
		return (
			<main>
				<Article test={this.state.test}/>

				<br />

		  	<div onClick={this.tick}>
		    	Clicks: {this.state.count}
		  	</div>
	  		<p> Json data? {this.state.test}</p>
			</main>
		);
	}

}

App.propTypes = { initialCount: React.PropTypes.number };
App.defaultProps = { initialCount: 2, test: '' };


export default App;