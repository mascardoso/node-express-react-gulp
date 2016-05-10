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
				<Content test={this.props.test}/>
				<Author />
			</article>
		);
	}

}


export default Article;