import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CircularProgress } from "@mui/material";

export function CircularSpinner({ spinner=false }: { spinner?: boolean }) {
  return (
    <Modal open={spinner}>
      <Box
        sx={{
          display: "flex",
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          p: "100%",
        }}
      >
        <CircularProgress sx={{ color: "#bbb" }} />
      </Box>
    </Modal>
  );
}
