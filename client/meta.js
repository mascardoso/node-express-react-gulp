import React from 'react';
import ReactDom from 'react-dom';
import Meta from './components/meta/meta';

var description_data = 'article detail page';

ReactDom.render(<Meta description={description_data} />, document.getElementById('meta'));