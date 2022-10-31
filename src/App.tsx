import React from "react";
import BasicGrid from "./Components/AdventureEditMenu/AdventureEditMenu";
import AdventureList from "./Components/AdventuresList/AdventureList";
import ImageUploader from "./Components/BaseComponents/Inputs/ImageUploader";
import ImageListView from "./Components/Forms/ImageListView";
import Forms from "./Components/Forms/Forms";

function App() {
  return (
    <>   
      {/* <AdventureList ></AdventureList> */}
      {/* <BasicGrid ></BasicGrid> */}
      <Forms ></Forms>
      {/* <ImageUploader ></ImageUploader> */}
      {/* <ImageListView onClickBtn={()=>{}}  ></ImageListView> */}
    </>
  );
}

export default App;
