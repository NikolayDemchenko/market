import React from "react";
import AdventureEditMenu from "./Components/Forms/AdventureEditMenu/AdventureEditMenu";
import AdventureList from "./Components/Forms/AdventuresList/AdventureList";
import ImageListView from "./Components/Forms/AdventureEditMenu/Components/ImageList";
import Forms from "./Components/Forms/Forms";

function App() {
  return (
    <>   
      {/* <AdventureList ></AdventureList> */}
      <AdventureEditMenu ></AdventureEditMenu>
      {/* <Forms ></Forms> */}
      {/* <ImageListView onClickBtn={()=>{}}  ></ImageListView> */}
    </>
  );
}

export default App;
