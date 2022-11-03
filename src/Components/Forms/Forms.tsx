import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Autorization from "./Autorization";
import Registr from "./Registr";
import TestForm from "./TestForm";

export default function Forms() {
  return (
    <Grid container justifyContent="center">
      <Box sx={{ width: "80ch", pt: 5 }}>
        {/* <Registr></Registr>
        <Autorization></Autorization> */}
        <TestForm></TestForm>
      </Box>
    </Grid>
  );
}
