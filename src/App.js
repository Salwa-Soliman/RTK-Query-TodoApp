import "./App.css";
import AddTodo from "./components/todos/AddTodo";
import Header from "./components/ui/Header";
import Todos from "./components/todos/Todos";
import Toast from "./components/ui/Toast";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <Todos />
      <Toast />
    </div>
  );
}

export default App;
