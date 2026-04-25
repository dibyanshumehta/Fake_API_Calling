import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Details from "./components/Details";
import { createContext } from "react";

export const myContext = createContext();

function App() {
  const val = {userName: 'Dibyanshu', city: 'Haldwani'};
  return (
    <>
      <myContext.Provider value={val.userName}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/all-products/:id" element={<Products />} />
          <Route path="/product-details/:id" element={<Details />} />
        </Routes>
      </myContext.Provider>
    </>
  );
}

export default App;
