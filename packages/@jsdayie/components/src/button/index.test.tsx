import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '.';

test("Button", async () => {
    const component = renderer.create(
        <Button href="/somepath" color="warning">Test</Button>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});