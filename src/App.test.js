import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { todosApi } from "./store/services/todosApi";

test("renders learn react link", () => {
  render(
    <ApiProvider api={todosApi}>
      <App />
    </ApiProvider>
  );
  const linkElement = screen.getByText(/todo app/i);
  expect(linkElement).toBeInTheDocument();
});
