import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import hSlon from "../../../Content/logo_slon_web.png";
export default function HSlon() {
  return (
    <Grid container justifyContent="center">
      <Box sx={{ width: "30ch" }}>   
        <img src={hSlon} alt="hslon" />
      </Box>
    </Grid>
  );
}
