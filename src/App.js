import "./App.css";
import AddTodo from "./cmpns/AddTodo";
import TodosList from "./cmpns/TodosList";

function App() {
  return (
      <div className="App">
        <h1>Redux</h1>
        <AddTodo />
        <TodosList />
      </div>
  );
}

export default App;
