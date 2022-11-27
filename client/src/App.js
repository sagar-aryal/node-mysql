import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
