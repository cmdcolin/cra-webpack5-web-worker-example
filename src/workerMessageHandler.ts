// this module is used on worker thread if in prod, in jest tests, a mock in
// src/__mocks__ loads this on the main thread
export function dispatch(args: { type: string; [key: string]: unknown }) {
  if (args.type === "greeting") {
    return greeting(args.username as string);
  } else {
    throw new Error(
      "Unknown message type. Pass a 'type' to the call() method of callWorker"
    );
  }
}
export function greeting(username: string) {
  return `Hello ${username}`;
}
