// this is main thread code that makes postMessage requests to a worker
import { dispatch } from "../workerMessageHandler";
console.log("t1");
export default class WorkerHandlerJest {
  constructor() {}

  async call(args: any) {
    return dispatch(args);
  }
}
