jest.mock("./callWorker");
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  const { findByText } = render(<App />);
  await findByText(/Hello user/);
});
