import React from 'react';

class Asset extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div className="article__asset">
				<figure>
					<img src="https://placeholdit.imgix.net/~text?txtsize=60&txt=640%C3%97480&w=640&h=480" alt="Alt" title="title"/>
					<figcaption>&copy; Caspar Huurdeman</figcaption>
				</figure>

				<div>Description of the image or video</div>
			</div>
		);
	}
}


export default Asset;