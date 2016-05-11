import React from 'react';
import Tags from './tags/Tags';
import Heading from './heading/Heading';
import Socials from './socials/Socials';
import Asset from './asset/Asset';
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
				<Asset />
				<Author />

				<Content test={this.props.test} />
				<Socials />
			</article>
		);
	}

}


export default Article;