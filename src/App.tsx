import React from "react";
import AdventureEditMenu from "./Components/Forms/AdventureEditMenu/AdventureEditMenu";
import AdventureList from "./Components/Forms/AdventuresList/AdventureList";
import ImageListView from "./Components/Forms/AdventureEditMenu/Components/ImageList";
import Forms from "./Components/Forms/Forms";
import { TAdventure, TState } from "./Model/types";
import {
  getAdventureDataBody,
  getProviderAdventureListBody,
} from "./REST/rest1C";
import BasicButton from "./Components/BaseComponents/Buttons/BasicButton";
import { getAdventureList } from "./REST/AdventureMongoREST";
import { Box } from "@mui/material";

function App() {

  const [state, setState] = React.useState<TState>({ list: _adventures });
  React.useEffect(() => {
    // getAdventureList(setState);// Раскомментировать и в стейт пустой массив передать вместо _adventures
  }, []);
  console.log("state :>> ", state);
  return (
    <>
      {state && state.adventure ? (
        <AdventureEditMenu
          {...{ adventure: state.adventure, setState }}
        ></AdventureEditMenu>
      ) : (
        state && (
          <AdventureList
            {...{ adventures: state.list, setState }}
          ></AdventureList>
        )
      )}
      {/* <Forms ></Forms> */}
      {/* <ImageListView onClickBtn={()=>{}}  ></ImageListView> */}
      <Box sx={{p:3}}>

      <BasicButton
        btnText={"Кнопка для тестирования запросов к 1c"}
        onClick={() => {
          getProviderAdventureListBody((data: object) => {
            console.log("data :>> ", data);
          }, "51b1096a-3cd5-11ec-8122-001999b9620c");
          getAdventureDataBody((data: object) => {
            console.log("data :>> ", data);
          }, "6d5b172f-31b0-11ec-8122-001999b9620c");
        }}
        />
        </Box>
    </>
  );
}

export default App;

// Получаем из бд список приключений (скорее всего, массив объектов);
let _adventures: TAdventure[] = [
  {
    id: "0001",
    name: "Катание на квадроцикле",
    status: true,
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
  },
  {
    id: "0002",
    name: "Страйкбол",
    status: true,
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
  },
  {
    id: "0003",
    name: "Полёт в аэротрубе",
    status: false,
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
  },
  {
    id: "0004",
    name: "Свидание на крыше",
    status: true,
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
  },
  {
    id: "0001",
    name: "Катание на квадроцикле",
    status: true,
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
  },
  {
    id: "0002",
    name: "Страйкбол",
    status: true,
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
  },
  {
    id: "0003",
    name: "Полёт в аэротрубе",
    status: false,
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
  },
  {
    id: "0004",
    name: "Свидание на крыше",
    status: true,
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
  },
  {
    id: "0001",
    name: "Катание на квадроцикле",
    status: true,
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
  },
  {
    id: "0002",
    name: "Страйкбол",
    status: true,
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
  },
  {
    id: "0003",
    name: "Полёт в аэротрубе",
    status: false,
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
  },
  {
    id: "0004",
    name: "Свидание на крыше",
    status: true,
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
  },
  {
    id: "0001",
    name: "Катание на квадроцикле",
    status: true,
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
  },
  {
    id: "0002",
    name: "Страйкбол",
    status: true,
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
  },
  {
    id: "0003",
    name: "Полёт в аэротрубе",
    status: false,
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
  },
  {
    id: "0004",
    name: "Свидание на крыше",
    status: true,
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
  },
  {
    id: "0001",
    name: "Катание на квадроцикле",
    status: true,
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
  },
  {
    id: "0002",
    name: "Страйкбол",
    status: true,
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
  },
  {
    id: "0003",
    name: "Полёт в аэротрубе",
    status: false,
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
  },
  {
    id: "0004",
    name: "Свидание на крыше",
    status: true,
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
  },
  {
    id: "0001",
    name: "Катание на квадроцикле",
    status: true,
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
  },
  {
    id: "0002",
    name: "Страйкбол",
    status: true,
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
  },
  {
    id: "0003",
    name: "Полёт в аэротрубе",
    status: false,
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
  },
  {
    id: "0004",
    name: "Свидание на крыше",
    status: true,
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
  },
  {
    id: "0001",
    name: "Катание на квадроцикле",
    status: true,
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
  },
  {
    id: "0002",
    name: "Страйкбол",
    status: true,
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
  },
  {
    id: "0003",
    name: "Полёт в аэротрубе",
    status: false,
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
  },
  {
    id: "0004",
    name: "Свидание на крыше",
    status: true,
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
  },
];

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
