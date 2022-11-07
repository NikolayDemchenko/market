import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import TableContainer from "@mui/material/TableContainer";
import AddAPhoto from "@mui/icons-material/AddAPhoto";
import CheckedComponentWrapper from "../../../BaseComponents/StaticContentComponents/CheckedComponentWrapper";
import { TAdventureImage } from "../../../../Model/types";
import {
  Text,
  Variant,
} from "../../../BaseComponents/DisplayingComponents/Text";
import { HiddenDelete } from "../../../BaseComponents/Buttons/HiddenDelete";
import Grid from "@mui/material/Grid";

export default function ImageListView({
  images = [],
  setImages,
}: {
  images: TAdventureImage[] | undefined;
  setImages: (images: TAdventureImage[]) => void;
}) {
  const addHandler = (event: any) => {
    console.log("event :>> ", event);
    setImages([
      ...images,
      {
        img: URL.createObjectURL(event.target.files[0]),
        title: "New image",
      },
    ]);
  };

  const clickImgHandler = (item: any) => {
    setImages(
      images.map((image) =>
        image === item ? { ...image, checked: !image.checked } : image
      )
    );
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
          <Grid container alignItems="center" spacing={2}>
              <Grid item xs={6}>
                <Text {...{ variant: Variant.h6, text: "Фото" }} />
              </Grid>
              <Grid item xs={6}>
                <IconButton size="large" component="label" onChange={addHandler}>
                <Grid container direction="column" alignItems="center">
                <input hidden accept={`image/*`} type="file" />
                <AddAPhoto />
                <Text {...{ variant: Variant.caption, text: "Добавить" }} />
              </Grid>
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
              </Grid>
            </Grid>
                <HiddenDelete {...{items:images,setItems:setImages}}/>            
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
          {images.map((item) => (
            <ImageListItem
              sx={{ m: 0.5, width: 160, maxHeight: 160 }}
              key={item.img}
              onClick={() => clickImgHandler(item)}
            >
              <CheckedComponentWrapper {...{ checked: item.checked }} />
              {item.img.includes("blob") ? (
                <img
                  src={item.img}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
              ) : (
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              )}
            </ImageListItem>
          ))}
        </Box>
      </TableContainer>
    </>
  );
}