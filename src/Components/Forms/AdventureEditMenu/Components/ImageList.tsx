import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import TableContainer from "@mui/material/TableContainer";
import AddAPhoto from "@mui/icons-material/AddAPhoto";
import CheckedComponentWrapper from "../../../BaseComponents/StaticContentComponents/CheckedComponentWrapper";
import { TAdventureImage, TImageRequestData } from "../../../../Model/types";
import {
  Text,
  Variant,
} from "../../../BaseComponents/DisplayingComponents/Text";
import { HiddenDelete } from "../../../BaseComponents/Inputs/Buttons/HiddenDelete";
import Grid from "@mui/material/Grid";
import { toBase64 } from './imageToBase64';
import BasicTooltip from "../../../BaseComponents/DisplayingComponents/Tooltip";

export default function ImageListView({
  images = [],
  setImages,
}: {
  images: TAdventureImage[] | undefined;
  setImages: (images: TAdventureImage[]) => void;
}) {
  const addHandler = (event: any) => {
    toBase64(event, (requestData: TImageRequestData) => {
      setImages([
        ...images,
        {
          img: URL.createObjectURL(event.target.files[0]),
          title: "New image",
          requestData,
        },
      ]);
    });
  };

  const clickImgHandler = (item: TAdventureImage) => {
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
          <Toolbar sx={{ display: "flex", alignItems: "center" }}>
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
                <BasicTooltip title="Прикрепите горизонтальное изображение" />            
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
          {images.map((item, index) => (
            <ImageListItem
              sx={{ m: 0.5, width: 160, maxHeight: 160 }}
              key={index}
              onClick={() => clickImgHandler(item)}
            >
              <CheckedComponentWrapper {...{ checked: item.checked }} />
                <img
                  src={item.img}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
            </ImageListItem>
          ))}
        </Box>
      </TableContainer>
    </>
  );
}