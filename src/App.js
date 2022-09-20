import "./App.css";
import AddTodo from "./components/todos/AddTodo";
import Header from "./components/ui/Header";
import TodoList from "./components/todos/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
