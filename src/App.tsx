import React from "react";
import { Catalog } from "./Modules/Catalog/Catalog";
import { Booking } from "./Modules/Booking/Booking";
import { check } from "./test";
import {
  MyRegistration,
  RegForm,
} from "./Modules/Catalog/RegForm";
import { Grid } from "@mui/material";
import { Adventures } from "./Modules/Adventures/Adventures";

function App() {
  console.log('check() :>> ', check());

  return (
  <>
   <Grid container justifyContent="center">
      <RegForm />    
      {/* <Booking></Booking>      */}
      <Catalog></Catalog>
   </Grid>
   </>
  );
}

export default App;
