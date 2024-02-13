## Using web workers with webpack 5/create-react-app v5

Follows https://webpack.js.org/guides/web-workers/

Note: jest tests do not work with syntax like import.meta.url, so this creates
a module mock to only call worker methods on the main thread of jest (e.g.
there is no actual worker in jest tests). See version v0.0.1 for simpler
code without any jest ability

## Demo

https://cmdcolin.github.io/cra-webpack5-web-worker-example
