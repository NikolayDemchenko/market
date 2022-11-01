import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
export default function CheckedComponentWrapper({ checked }:{checked: boolean | undefined}) {
  return (
    <>
      {checked && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            position: "absolute",
            bgcolor: "rgba(255, 252, 238, 0.7)",
          }}
        >
          <CheckIcon sx={{ color: "#333" }} />
        </Box>
      )}  
    </>
  );
}
