Demo of using web workers with webpack 5/create-react-app v5

Follows https://webpack.js.org/guides/web-workers/

Note: jest tests do not work with syntax like import.meta.url, it is
recommended to mock out the worker code for something that works without it in
your tests
