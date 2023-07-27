import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Inicio}></Route>
        <Route path="/books" Component={Books}></Route>
        <Route path="/add" Component={Add}></Route>
        <Route path="/update/:id" Component={Update}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
