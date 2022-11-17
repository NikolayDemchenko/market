import * as React from "react";
import Box from "@mui/material/Box";
import { Text, Variant } from "../../BaseComponents/DisplayingComponents/Text";
import { RowTextInput } from "../../BaseComponents/Inputs/RowTextInput";
import VideoListView from "./Components/VideoList";
import ImageListView from "./Components/ImageList";
import {
  TAdventure,
  TAdventureImage,
  TAdventureVideo,
  TCharacteristic,
  TDescription,
  TSetState,
  TState,
} from "../../../Model/types";
import Description from "./Components/Description";
import Characteristics from "./Components/Characteristics";
import { Stack, Toolbar } from "@mui/material";
import { BasicButton } from "../../BaseComponents/Inputs/Buttons/BasicButton";
import {
  createAdventure,
  updateAdventure,
  getAdventureList,
} from "../../../REST/rest";
export default function AdventureEditMenu({
  state,
  setState,
}: {
  state: TState;
  setState: TSetState;
}) {
  const { adventure } = state;
  const setAdventure = (adv: TAdventure) => {
    setState((state) => ({ list: { ...state!.list }, adventure: adv }));
  };
  const createAdv = (adventure: TAdventure) => {
    console.log("adventure :>> ", adventure);
    createAdventure(state, setState);
  };
  const updateAdv = (adventure: TAdventure) => {
    console.log("adventure :>> ", adventure);
    updateAdventure(state, setState);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Grid container spacing={2}> */}
      <Toolbar>
        <Text
          {...{ variant: Variant.h5, text: "Редактирование приключения" }}
        />
      </Toolbar>
      <RowTextInput
        {...{
          label: "Название",
          defaultValue: adventure!.name,
          getText: (name: string) => setAdventure({ ...adventure!, name }),
        }}
      />
      <Description
        {...{
          description: adventure!.description,
          setDescription: (description: TDescription) =>
            setAdventure({ ...adventure!, description }),
        }}
      ></Description>
      <ImageListView
        {...{
          images: adventure!.images,
          setImages: (images: TAdventureImage[]) =>
            setAdventure({ ...adventure!, images }),
        }}
      ></ImageListView>
      <VideoListView
        {...{
          videos: adventure!.videos,
          setVideos: (videos: TAdventureVideo[]) => {
            setAdventure({ ...adventure!, videos });
          },
        }}
      ></VideoListView>
      <Characteristics
        {...{
          characteristics: adventure!.characteristics,
          setCharacteristics: (characteristics: TCharacteristic[]) => {
            console.log("characteristics :>> ", characteristics);
            setAdventure({ ...adventure!, characteristics });
          },
        }}
      ></Characteristics>
      <Stack direction="row" spacing={2} sx={{ maxWidth: "100%" }}>
        <BasicButton
          {...{
            onClick: () => {
              getAdventureList(setState);
            },
          }}
        >
          Отмена
        </BasicButton>
        <BasicButton
          {...{
            onClick: () => {
              !adventure!.id
                ? console.log("Без ID :>> ")
                : console.log("C ID :>> ");
              !adventure!.id ? createAdv(adventure!) : updateAdv(adventure!);
            },
          }}
        >
          Сохранить
        </BasicButton>
      </Stack>
      {/* </Grid> */}
    </Box>
  );
}
