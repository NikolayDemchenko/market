import * as React from "react";
import ReactPlayer from "react-player";
import ImageListItem from "@mui/material/ImageListItem";
import { AppBar, Button, Stack } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import BasicModal from "../../../BaseComponents/Modals/BasicModal";
import CheckedComponentWrapper from "../../../BaseComponents/StaticContentComponents/CheckedComponentWrapper";
import { TAdventureVideo } from "../../../../types/provider";

export default function VideoListView({ 
  videos=[], 
  setVideos 
}: {
  videos?: TAdventureVideo[];
  setVideos: Function; }) {
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

  return (
    <>
      <AppBar position="static" color="inherit">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={1}
          sx={{ color: "#111" }}
        >
          <BasicModal {...{ getVideoUrl }}></BasicModal>
          <Button
            sx={{ color: "#616161" }}
            fullWidth
            component="label"
            onClick={deleteHandler}
          >
            <DeleteIcon />
          </Button>
        </Stack>
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
