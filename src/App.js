import "./App.css";
import AddTodo from "./components/todos/AddTodo";
import Header from "./components/ui/Header";
import TodoList from "./components/todos/TodoList";
import Toast from "./components/ui/Toast";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList />
      <Toast />
    </div>
  );
}

export default App;
