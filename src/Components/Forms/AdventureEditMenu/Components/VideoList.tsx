import * as React from "react";
import ReactPlayer from "react-player";
import ImageListItem from "@mui/material/ImageListItem";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Modal,
  Stack,
  Toolbar,
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckedComponentWrapper from "../../../BaseComponents/StaticContentComponents/CheckedComponentWrapper";
import { TAdventureVideo } from "../../../../types/provider";
import {
  Text,
  Variant,
} from "../../../BaseComponents/DisplayingComponents/Text";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import BasicButton from "../../../BaseComponents/Buttons/BasicButton";
import MultilineText from "../../../BaseComponents/Inputs/MultilineText";
export default function VideoListView({
  videos = [],
  setVideos,
}: {
  videos?: TAdventureVideo[];
  setVideos: Function;
}) {
  const addHandler = (url: string) => {
    setVideos([
      ...videos,
      {
        video: url,
        title: "New video",
      },
    ]);
  };

  const deleteHandler = () => {
    setVideos(videos.filter((video) => !video.checked));
  };

  const clickVideoHandler = (item: any) => {
    setVideos(
      videos.map((video) =>
        video === item ? { ...video, checked: !video.checked } : video
      )
    );
  };

  const getVideoUrl = (url: string) => {
    addHandler(url);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <VideoAddModal {...{ getVideoUrl, open, handleClose }}></VideoAddModal>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Text {...{ variant: Variant.h6, text: "Видео" }} />
        </Toolbar>
        <Box sx={{ minWidth: "100%" }}>
          <BottomNavigation showLabels>
            <BottomNavigationAction
              label="Добавить"
              icon={<VideoCallIcon sx={{ color: "#616161" }} />}
              value={"Добавить"}
              onClick={handleOpen}
            />
            <BottomNavigationAction
              label="Удалить"
              icon={<DeleteIcon />}
              value={"Удалить"}
              onClick={deleteHandler}
            />
          </BottomNavigation>
        </Box>  
      </AppBar>
      <TableContainer sx={{ maxHeight: 360 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-start",
            bgcolor: "background.paper",
          }}
        >
          {videos.map((item) => (
            <ImageListItem
              key={item.video}
              onClick={() => clickVideoHandler(item)}
              sx={{ m: 0.5, width: 286, maxHeight: 160 }}
            >
              <CheckedComponentWrapper {...{ checked: item.checked }} />
              <ReactPlayer
                url={item.video}
                width={"286px"}
                height={"160px"}
                controls={false}
                style={{ pointerEvents: "none" }}
              />
            </ImageListItem>
          ))}
        </Box>
      </TableContainer>
    </>
  );
}

export function VideoAddModal({
  getVideoUrl,
  open,
  handleClose,
}: {
  getVideoUrl: Function;
  handleClose: Function;
  open: boolean;
}) {
  const [inputData, setInputData] = React.useState("");

  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
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
          <MultilineText label={""} defaultValue={""} getText={setInputData} />
          <BasicButton
            btnText={"Добавить видео"}
            onClick={() => {
              getVideoUrl(inputData);
              handleClose();
            }}
          />
        </Stack>
      </Box>
    </Modal>
  );
}
