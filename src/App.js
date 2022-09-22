import "./App.css";
import AddTodo from "./components/todos/AddTodo";
import Header from "./components/ui/Header";
import Todos from "./components/todos/Todos";
import Toast from "./components/ui/Toast";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <AddTodo />
        <Todos />
        <Toast />
      </ErrorBoundary>
    </div>
  );
}

export default App;
