import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import MultilineTextInput from "../Inputs/MultilineText";
import AddButton from "../Buttons/BasicButton";
import { Text, Variant } from "../DisplayingComponents/Text";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Stack } from "@mui/material";

export  function VideoModal({ getVideoUrl }: { getVideoUrl: Function }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputData, setInputData] = React.useState("");

  return (
    <>
      <Button component="label" onClick={handleOpen} fullWidth>
        <VideoCallIcon sx={{ color: "#616161" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 360,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Stack spacing={1}>
            <Text
              {...{ variant: Variant.body1, text: "Вставьте ссылку на видео" }}
            />
            <MultilineTextInput
              label={""}
              defaultValue={""}
              getText={setInputData}
            />
            <AddButton
              btnText={"Добавить видео"}
              onClick={() => {
                getVideoUrl(inputData);
                handleClose();
              }}
            />
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
