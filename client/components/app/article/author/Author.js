import React from 'react';

class Author extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div className="article__author">
				<span className="article__author__name">Merel van den Brink</span>
				<span className="article__author__date">23 April 2016</span>
			</div>
		);
	}

}


export default Author;