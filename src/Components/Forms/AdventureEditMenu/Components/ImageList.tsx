import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import { AppBar, Button, Stack } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import AddAPhoto from "@mui/icons-material/AddAPhoto";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckedComponentWrapper from "../../../BaseComponents/StaticContentComponents/CheckedComponentWrapper";
import { TAdventureImage } from "../../../../types/provider";

export default function ImageListView({
  images = [],
  setImages,
}: {
  images: TAdventureImage[] | undefined;
  setImages: (images: TAdventureImage[]) => void;
}) {
  const addHandler = (event: any) => {
    setImages([
      ...images,
      {
        img: URL.createObjectURL(event.target.files[0]),
        title: "New image",
      },
    ]);
  };

  const deleteHandler = () => {
    setImages(images.filter((image) => !image.checked));
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
      <AppBar position="static" color="inherit">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={1}
          sx={{ color: "#111" }}
        >
          <Button
            sx={{ color: "#616161" }}
            component="label"
            onChange={addHandler}
            fullWidth
          >
            <input hidden accept={`image/*`} type="file" />
            <AddAPhoto />
          </Button>
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
