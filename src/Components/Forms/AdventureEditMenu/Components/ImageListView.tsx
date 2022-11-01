import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import { AppBar, Button, Stack } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckedComponentWrapper from "../../../BaseComponents/StaticContentComponents/CheckedComponentWrapper";

export default function ImageListView() {
  const [images, setItemData] = React.useState(itemData);

  const addHandler = (event: any) => {
    setItemData((images) => [
      ...images,
      {
        img: URL.createObjectURL(event.target.files[0]),
        title: "New image",
      },
    ]);
  };

  const deleteHandler = () => {
    setItemData((images) => images.filter((image) => !image.checked));
  };

  const clickImgHandler = (item: any) => {
    setItemData((images) =>
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
            <AddAPhotoIcon />
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
                sx={{ m: 0.5, width: 160,maxHeight:160 }}
                key={item.img}
                onClick={() => clickImgHandler(item)}
              >      
                <CheckedComponentWrapper {...{checked:item.checked}}/>
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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    checked: false,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
