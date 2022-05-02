import React from 'react';
import renderer from 'react-test-renderer';
import HtmlPage from '.';

test('Check if HtmlPage renders', () => {
  const component = renderer.create(<HtmlPage />);
  const tree = component.toJson();
  expect(tree).toMatchInlineSnapshot();
});
