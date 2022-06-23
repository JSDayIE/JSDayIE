import React from "react";
import renderer from "react-test-renderer";
import { BlogEntry } from "./blog_entry";

test("BlogEntry", async () => {
  const component = renderer.create(<BlogEntry markdown="**test**" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
