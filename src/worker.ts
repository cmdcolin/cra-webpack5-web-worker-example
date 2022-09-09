/* eslint-disable no-restricted-globals */
import { dispatch } from "./workerMessageHandler";
import { serializeError } from "serialize-error";
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
