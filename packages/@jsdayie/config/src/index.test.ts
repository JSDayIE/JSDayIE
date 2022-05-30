import { routes, PATHS } from "./index";

test("should be able to import PATHs", async () => {
  expect(PATHS.blog).toEqual("/blog");
});

test("should be able to import routes", async () => {
  expect(routes[0].path).toEqual(PATHS.home);
});
