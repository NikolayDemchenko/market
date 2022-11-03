import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Text, Variant } from "../../BaseComponents/DisplayingComponents/Text";
import RowText from "../../BaseComponents/Inputs/RowText";
import Amount from "../../BaseComponents/Inputs/Amount";
import SignedCheckBox from "../../BaseComponents/Inputs/SignedCheckBox";
import AdventureNom from "./Components/Description";
import AdventureLot from "./Components/Lots/LotList";
import LotOption from "./Components/Options/OptionList";
import VideoListView from "./Components/VideoList";
import ImageListView from "./Components/ImageList";
import {
  TAdventure,
  TAdventureImage,
  TAdventureVideo,
  TCharacteristic,
  TDescription,
} from "../../../types/provider";
import Description from "./Components/Description";
import Characteristics from "./Components/Characteristics";

export default function AdventureEditMenu() {
  const [adventure, setAdventure] = React.useState<TAdventure>({
    id: "",
    name: "",
    img: "",
    status: false,
    images,
    videos,
    description: {
      address: "",
      info: "",
      limitations: "",
      phone: "",
      preRegistration: false,
      program: "",
      connectedСalendar: false,
      indivisibleVolume: true,
      peopleAmount: 1,
      seasonality: "январь, март",
      slotSize: 2,
      slotVolume: 3,
    },
    characteristics: [
      {
        name: "Всё включено",
        description: "Всё включено",
        duration: "Всё включено",
        price: 5000,
        priceData: "Всё включено",
        slotAmount: 5,
      },
    ],
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Grid container spacing={2}> */}
      <Text {...{ variant: Variant.h5, text: "Редактирование приключения" }} />
      <RowText
        {...{
          label: "Название",
          defaultValue: adventure.name,
          getText: (name: string) => setAdventure({ ...adventure, name }),
        }}
      />
      <Description
        {...{
          description: adventure.description,
          setDescription: (description: TDescription) =>
            setAdventure({ ...adventure, description }),
        }}
      ></Description>
      <ImageListView
        {...{
          images: adventure.images,
          setImages: (images: TAdventureImage[]) =>
            setAdventure((adventure) => ({ ...adventure, images })),
        }}
      ></ImageListView>
      <VideoListView
        {...{
          videos: adventure.videos,
          setVideos: (videos: TAdventureVideo[]) => {
            setAdventure((adventure) => ({ ...adventure, videos }));
          },
        }}
      ></VideoListView>
      <Characteristics
        {...{
          characteristics: adventure.characteristics,
          setCharacteristics: (characteristics: TCharacteristic[]) => {
            console.log('characteristics :>> ', characteristics);
            setAdventure((adventure) => ({ ...adventure, characteristics }));
          },
        }}
      ></Characteristics>

      {/* </Grid> */}
    </Box>
  );
}

const images = [
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
const videos = [
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
