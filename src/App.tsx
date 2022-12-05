import React from "react";
import { Catalog } from "./Components/Modules/Catalog/Catalog";
import { Booking } from "./Components/Modules/Booking/Booking";
import { check } from "./test";
import {
  MyRegistration,
  RegForm,
} from "./Components/Modules/Catalog/Interfaces";
import { Grid } from "@mui/material";

function App() {
  // console.log('check() :>> ', check());

  return (
  <>
   <Grid container justifyContent="center">
      <RegForm />
      {/* <Booking></Booking>      */}
      {/* <Catalog></Catalog> */}
   </Grid>
  </>
  );
}

export default App;
