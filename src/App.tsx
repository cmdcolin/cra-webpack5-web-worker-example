import { useEffect, useState } from "react";
import WorkerHandler from "./workerHandler";

function App() {
  const [greeting, setGreeting] = useState<string>();
  const [error, setError] = useState<unknown>();
  const [val, setVal] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const workerHandler = new WorkerHandler();
        const result = (await workerHandler.call({ username: val })) as {
          greeting: string;
        };
        setGreeting(result.greeting as string);
      } catch (e) {
        setError(e);
      }
    })();
  }, [val]);
  return (
    <div>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        id="username"
      />
      <p>{greeting}</p>
      {error ? <div style={{ color: "red" }}>{`${error}`}</div> : null}
    </div>
  );
}

export default App;
