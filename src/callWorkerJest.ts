// this is main thread code that makes postMessage requests to a worker
export default class WorkerHandlerJest {
  resolvers: { [key: string]: (arg: any) => unknown } = {};

  count = 0;

  constructor() {}

  async call(args: any) {
    return dispatch(args);
  }
}
