// this is main thread code that makes postMessage requests to a worker
export default class WorkerHandler {
  resolvers: { [key: string]: (arg: any) => unknown } = {};

  count = 0;

  worker = new Worker(new URL("./worker.ts", import.meta.url));

  constructor() {
    this.worker.onmessage = ({ data }) => {
      const { result, __messageId } = data;
      this.resolvers[__messageId](result);
      delete this.resolvers[__messageId];
    };
  }

  call(args: any) {
    const __messageId = this.count++;
    this.worker.postMessage({ args, __messageId });
    return new Promise((resolve) => (this.resolvers[__messageId] = resolve));
  }
}
