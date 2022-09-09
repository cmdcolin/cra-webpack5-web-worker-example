/* eslint-disable no-restricted-globals */
import { dispatch } from "./workerMessageHandler";
import { serializeError } from "serialize-error";

// this runs on the webworker, created with webpack 5 syntax new
// Worker('./worker.ts'). in jest tests, this module is not used, instead the
// workerMessageHandler is directly addressed
self.onmessage = ({ data }) => {
  const { __messageId, args } = data;
  try {
    const result = dispatch(args);
    self.postMessage({
      result,
      __messageId,
    });
  } catch (e) {
    self.postMessage({
      __messageId,
      error: serializeError(e),
    });
  }
};

export {};
