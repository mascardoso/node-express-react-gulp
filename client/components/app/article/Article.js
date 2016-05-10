import React from 'react';
import Heading from './heading/Heading';
import Content from './content/Content';
import Author from './author/Author';

class Article extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<article>
				<Heading />
				<Content />
				<Author />
			</article>
		);
	}

}


export default Article;