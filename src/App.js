import './App.css';
import image from './leave.png'
import { TodoList } from './TodoList';

function App() {
  return (
    <div className="app">
      <img src={image} width="150px" alt="leave" />
      <div className="container">
      <h1>To Do List!</h1>
      </div>
      <TodoList/>
    </div>

  );
}

export default App;