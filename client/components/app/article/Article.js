import React from 'react';
import Tags from './tags/Tags';
import Heading from './heading/Heading';
import Socials from './socials/Socials';
import Content from './content/Content';
import Author from './author/Author';

class Article extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<article>
				<Tags />
				<Heading />
				<Socials />
				<Content test={this.props.test} />
				<Socials />
				<Author />
			</article>
		);
	}

}


export default Article;