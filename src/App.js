import React from "react";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";

function App() {
  return (
    <div className="App">
      <h1>My Items App</h1>
      <ItemForm />
      <ItemList />
    </div>
  );
}

export default App;
