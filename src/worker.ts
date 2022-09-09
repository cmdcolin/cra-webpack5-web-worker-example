/* eslint-disable no-restricted-globals */
import { dispatch } from "./workerMessageHandler";
self.onmessage = ({ data }) => {
  const { __messageId, args } = data;
  const result = dispatch(args);
  self.postMessage({
    result,
    __messageId,
  });
};

export {};
