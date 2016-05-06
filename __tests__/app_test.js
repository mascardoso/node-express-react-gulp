// __tests__/App-test.js

jest.unmock('../client/components/app/index.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../client/components/app/index.js';

describe('App', () => {

  it('check initial', () => {
    // Render a app with label in the document
    const app = TestUtils.renderIntoDocument(
      <App />
    );

    // console.log(app);
    const appNode = ReactDOM.findDOMNode(app);

    // Verify that it's Off by default
    expect(appNode.count).toEqual(1);

    // Simulate a click and verify that it is now On
    // TestUtils.Simulate.change(
    //   TestUtils.findRenderedDOMComponentWithTag(app, 'input')
    // );
    // expect(appNode.textContent).toEqual('On');
  });

});