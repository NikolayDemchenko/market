import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageListView from "./AdventureEditMenu/Components/ImageListView";
import Autorization from "./Autorization";
import Registr from "./Registr";
import TestForm from "./TestForm";
import AdventureLot from "./AdventureEditMenu/Components/Lots/LotList";
import LotOption from "./AdventureEditMenu/Components/Options/OptionList";
import Adventure from "./AdventureEditMenu/Components/Adventure";

export default function Forms() {
  return (
    <Grid container justifyContent="center">
      <Box sx={{ width: "80ch", pt: 5 }}>
        {/* <Registr></Registr>
        <Autorization></Autorization>
        <ImageListView></ImageListView>
        <TestForm></TestForm> */}
        <Adventure></Adventure>
        <AdventureLot></AdventureLot>
        {/* <LotOption></LotOption> */}
      </Box>
    </Grid>
  );
}
