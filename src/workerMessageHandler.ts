export function dispatch(args: { type: string; [key: string]: unknown }) {
  if (args.type === "greeting") {
    return greeting(args.username as string);
  }
}
export function greeting(username: string) {
  return `Hello ${username}`;
}
