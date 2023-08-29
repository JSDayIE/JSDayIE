# JSDayIE

This is official website of JSDayIE: the first JavaScript conference in Ireland: www.jsday.ie.

Run the following in two terminals to run locally:

```sh
$ yarn dev
$ yarn watch
```

Update `path` in `images` in `next.config.js` to be able to load images from local host:

```js
// ...
images: {
    loader: "akamai",
    path: "http://localhost:3000/", // https://www.jsday.ie/
},
// ...
```
