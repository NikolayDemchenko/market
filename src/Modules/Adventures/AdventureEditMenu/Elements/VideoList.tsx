import * as React from "react";
import ReactPlayer from "react-player";
import ImageListItem from "@mui/material/ImageListItem";
import { AppBar, Grid, IconButton, Modal, Stack, Toolbar } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Box from "@mui/material/Box";
import { TAdventureVideo } from "../../Model/types";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { BaseText, Variant } from "../../../../Components/BaseComponents/Outputs/BaseText";
import { HiddenDelete } from "../../../../Components/BaseComponents/Inputs/Buttons/HiddenDelete";
import { BasicTooltip } from "../../../../Components/BaseComponents/Outputs/Tooltip";
import { CheckedComponentWrapper } from "../../../../Components/BaseComponents/Outputs/CheckedComponentWrapper";
import { MultilineText } from "../../../../Components/BaseComponents/Inputs/MultilineText";
import { BasicButton } from "../../../../Components/BaseComponents/Inputs/Buttons/Buttons";

export default function VideoListView({
  videos = [],
  setVideos,
}: {
  videos?: TAdventureVideo[];
  setVideos: (videos:TAdventureVideo[])=>void;
}) {
  console.log("videos :>> ", videos);
  const getVideoUrl = (url: string) => {
    setVideos([
      ...videos,
      {
        url,
        title: "",
      },
    ]);
  };

  const clickVideoHandler = (item: TAdventureVideo) => {
    setVideos(
      videos.map((video) =>
        video === item ? { ...video, checked: !video.checked } : video
      )
    );
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <VideoAddModal {...{ getVideoUrl, open, handleClose }}></VideoAddModal>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar sx={{ display: "flex", alignItems: "center" }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={6}>
                <BaseText {...{ variant: Variant.h6, text: "Видео" }} />
              </Grid>
              <Grid item xs={6}>
                <IconButton size="large" component="label" onClick={handleOpen}>
                  <Grid container direction="column" alignItems="center">
                    <VideoCallIcon />
                    <BaseText {...{ variant: Variant.caption, text: "Добавить" }} />
                  </Grid>
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
              </Grid>
            </Grid>
            <HiddenDelete {...{ items: videos, setItems: setVideos }} />
            <BasicTooltip title="Вставьте ссылку на ютуб-видео" />
          </Toolbar>
        </AppBar>
      </Box>
      <TableContainer sx={{ maxHeight: 360 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-start",
            bgcolor: "background.paper",
          }}
        >
          {videos.map((video) => {
            if (!video.url) return null;
            console.log('video.url :>> ', video.url);
            return (
              <ImageListItem
                key={video.url}
                onClick={() => clickVideoHandler(video)}
                sx={{ m: 0.5, width: 286, maxHeight: 160 }}
              >
                <CheckedComponentWrapper {...{ checked: video.checked }} />          
                <ReactPlayer       
                url={video.url}
                width={"286px"}
                height={"160px"}
                controls={false}
                style={{ pointerEvents: "none" }}
              />
              </ImageListItem>
            );
          })}
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
          width: 320,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Stack spacing={1}>
          <BaseText
            {...{ variant: Variant.body1, text: "Вставьте ссылку на видео" }}
          />
          <MultilineText label={""} defaultValue={""} getText={setInputData} />
         
          <BasicButton
            {...{
              onClick: () => {
                getVideoUrl(inputData);
              handleClose();
              },
            }}
          >
            Добавить видео
          </BasicButton>    
        </Stack>
      </Box>
    </Modal>
  );
}
