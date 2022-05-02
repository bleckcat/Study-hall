import React from 'react';
import renderer from 'react-test-renderer';
import Header from '.';

test('Check if header renders', () => {
  const component = renderer.create(<Header />);
  const tree = component.toJson();
  expect(tree).toMatchInlineSnapshot();
});
