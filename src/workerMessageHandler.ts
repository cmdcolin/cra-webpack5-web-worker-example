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
