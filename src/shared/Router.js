import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TodoListDetail from "../pages/TodoListDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<TodoListDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
