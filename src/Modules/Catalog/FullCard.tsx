import * as React from "react";
import Box from "@mui/material/Box";
// import VideoListView from "../Adventures/AdventureEditMenu/Components/VideoList";
// import ImageListView from "../Adventures/AdventureEditMenu/Components/ImageList";
// import Description from "../Adventures/AdventureEditMenu/Components/Description";
// import Characteristics from "../Adventures/AdventureEditMenu/Components/Characteristics";
import { Stack, Toolbar } from "@mui/material";
import { TState, TSetState, TAdventure, TDescription, TAdventureImage, TAdventureVideo, TCharacteristic } from "../Adventures/Model/types";
import { createItem, updateItem, getItemList } from "./REST/rest";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { TImage } from "./SmallCard";
import { RowTextInput } from "../../Components/BaseComponents/Inputs/RowTextInput";
import { BaseText, Variant } from "../../Components/BaseComponents/Outputs/BaseText";
import { BasicButton } from "../../Components/BaseComponents/Inputs/Buttons/Buttons";


export const  AdventureEditMenu=({
  state,
  setState,
}: {
  state: TState;
  setState: TSetState;
})=> {
  const { adventure } = state;
  const setAdventure = (adv: TAdventure) => {
    setState((state) => ({ list: { ...state!.list }, adventure: adv }));
  };
  const createAdv = (adventure: TAdventure) => {
    console.log("adventure :>> ", adventure);
    createItem(state, setState);
  };
  const updateAdv = (adventure: TAdventure) => {
    console.log("adventure :>> ", adventure);
    updateItem(state, setState);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Grid container spacing={2}> */}
      <Toolbar>
        <BaseText
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
      {/* <Description
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
      ></Characteristics> */}
      <Stack direction="row" spacing={2} sx={{ maxWidth: "100%" }}>
        <BasicButton
          {...{
            onClick: () => {
              getItemList(setState);
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



type TPromocod={}
type TFullCard={
  images?:TImage[],
  name:string,
  description:string
  minPrice?:number,
  maxPrice?:number,
  promocod?:TPromocod
}

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export  function FullCard({
  fullCard,
  setState,
}: {
  fullCard: TFullCard;
  setState: TSetState;
}) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 800,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{  height: 240 }}>
          {fullCard.images&&<Img alt="complex" src={fullCard.images[0].img} />}
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               {fullCard.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
               {fullCard.description}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography> */}
            </Grid>
            {/* <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid> */}
          </Grid>
          {/* <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid> */}
        </Grid>
      </Grid>
    </Paper>
  );
}
