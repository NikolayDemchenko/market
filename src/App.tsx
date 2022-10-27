import React from "react";
import "./App.css";
import BasicGrid from "./Components/AdventureEditMenu/AdventureEditMenu";
import Autorization from "./Components/Forms/Autorization";
import Registr from "./Components/Forms/Registr";
import TestForm from "./Components/Forms/TestForm";
import AdventureList from "./Components/AdventuresList/AdventureList";

function App() {
  return (
    <div className="App">   
      <AdventureList ></AdventureList>
      <BasicGrid ></BasicGrid>
      {/* <Registr ></Registr>
      <Autorization ></Autorization>
      <TestForm ></TestForm> */}
    </div>
  );
}

export default App;
