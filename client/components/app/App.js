import React from 'react';
import Article from './article/Article';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {count: props.initialCount};
		this.tick = this.tick.bind(this);
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
			</main>
		);
	}

}

App.propTypes = { initialCount: React.PropTypes.number };
App.defaultProps = { initialCount: 2 };


export default App;