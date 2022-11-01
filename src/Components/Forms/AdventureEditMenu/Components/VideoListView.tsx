import * as React from "react";
import ReactPlayer from "react-player";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { AppBar, Button, Stack } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import BasicModal from "../../../BaseComponents/Modals/BasicModal";
import CheckedComponentWrapper from "../../../BaseComponents/StaticContentComponents/CheckedComponentWrapper";

export default function VideoListView() {
  const [videos, setItemData] = React.useState(itemData);

  const addHandler = (url: string) => {
    setItemData((videos) => [
      ...videos,
      {
        video: url,
        title: "New video",
      },
    ]);
  };

  const deleteHandler = () => {
    setItemData((videos) => videos.filter((video) => !video.checked));
  };

  const clickVideoHandler = (item: any) => {
    setItemData((videos) =>
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
          <BasicModal {...{ getVideoUrl }}> 
          </BasicModal>
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
        <Grid container justifyContent="center">
          {/* <ImageList sx={{ width: 500 }} cols={1} rowHeight={160}> */}
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
            {/* </ImageList> */}
          </Box>
        </Grid>
      </TableContainer>
    </>
  );
}

const itemData = [
  {
    video: "https://www.youtube.com/watch?v=a2DkRBnp4ns",
    title: "",
    checked: false,
  },
  {
    video: "https://www.youtube.com/watch?v=5VK3fZsQtQE",
    title: "",
  },
  {
    video: "https://www.youtube.com/watch?v=FgvJH91a5K0",
    title: "",
  },
];
