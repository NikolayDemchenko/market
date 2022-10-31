import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageListView from "./ImageListView";
import Autorization from "./Autorization";
import Registr from "./Registr";
import TestForm from "./TestForm";

export default function Forms() {
  return (
    <Grid container justifyContent="center">
      <Box sx={{ width: "60ch", pt: 5 }}>
        <Registr></Registr>
        <Autorization></Autorization>
        <TestForm></TestForm>
        <ImageListView
          onClickBtn={(btn: string) => {
            console.log("clicked Button :>> ", btn);
          }}
        ></ImageListView>
      </Box>
    </Grid>
  );
}
