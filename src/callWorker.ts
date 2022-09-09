import { deserializeError } from "serialize-error";

// this is main thread code that makes postMessage requests to a worker
export default class CallWorker {
  resolvers: { [key: string]: (arg: any) => unknown } = {};
  rejectors: { [key: string]: (arg: any) => unknown } = {};

  count = 0;

  worker = new Worker(new URL("./worker.ts", import.meta.url));

  constructor() {
    this.worker.onmessage = ({ data }) => {
      const { result, error, __messageId } = data;
      if (error) {
        this.rejectors[__messageId](deserializeError(error));
      } else {
        this.resolvers[__messageId](result);
      }
      delete this.resolvers[__messageId];
      delete this.rejectors[__messageId];
    };
  }

  call(args: any) {
    const __messageId = this.count++;
    this.worker.postMessage({ args, __messageId });
    return new Promise((resolve, reject) => {
      this.resolvers[__messageId] = resolve;
      this.rejectors[__messageId] = reject;
    });
  }
}
