import React from "react";
import { TAdventure, TState } from "../../../Model/types";
import {  getItemList } from "../../../REST/rest";
import { CircularSpinner } from "../../BaseComponents/StaticContentComponents/CircularSpinner";

import {ListMyCards} from "../Catalog/ListMyCards";
import { AdventureEditMenu } from "./AdventureEditMenu/AdventureEditMenu";


export const Adventures=()=> {
  // Форма редактирования приключения
  const [state, setState] = React.useState<TState>({ list: [] });
  React.useEffect(() => {
    getItemList(setState);
  }, []);
  console.log(`%c state   <----  :>>`, "background:#caced3; ", state);

  return (
    <>   
      {state && <CircularSpinner {...{ spinner: state.spinner }} />}
      {state && state.adventure ? (
        <AdventureEditMenu {...{ state, setState }}></AdventureEditMenu>
      ) : (
        state && <ListMyCards {...{ state, setState }}></ListMyCards>
      )}     
    </>
  );
}



// Получаем из бд список приключений (скорее всего, массив объектов);
const providerId = "51b1096a-3cd5-11ec-8122-001999b9620c";
let _adventures: TAdventure[] = [
  {
    id: "0001",
    providerId,
    characteristics: [
      {
        id: "",
        name: "",
        description: "",
        slotQuantity: 0,
        //duration: "",
        price: 0,
        priceDate: "",
      },
    ],
    name: "Катание на квадроцикле",
    status: true,
    description: {
      duration: "",
      autofill: false,
      possibilitySellingCertificate: false,
      address: "",
      info: "",
      limitations: "",
      phone: "",
      preRegistration: false,
      program: "",
      connectedСalendar: false,
      indivisibleVolume: true,
      participantsQuantity: 1,
      seasonality: "",
      slotSize: 2,
      slotVolume: 3,
    },
  },
  {
    id: "0002",
    providerId,
    characteristics: [
      {
        id: "",
        name: "",
        description: "",
        slotQuantity: 0,
        //duration: "",
        price: 0,
        priceDate: "",
      },
    ],
    name: "Страйкбол",
    status: true,
    description: {
      duration: "",
      autofill: false,
      possibilitySellingCertificate: false,
      address: "",
      info: "",
      limitations: "",
      phone: "",
      preRegistration: false,
      program: "",
      connectedСalendar: false,
      indivisibleVolume: true,
      participantsQuantity: 1,
      seasonality: "",
      slotSize: 2,
      slotVolume: 3,
    },
  },
  {
    id: "0003",
    providerId,
    characteristics: [
      {
        id: "",
        name: "",
        description: "",
        slotQuantity: 0,
        //duration: "",
        price: 0,
        priceDate: "",
      },
    ],
    name: "Полёт в аэротрубе",
    status: false,
    description: {
      duration: "",
      autofill: false,
      possibilitySellingCertificate: false,
      address: "",
      info: "",
      limitations: "",
      phone: "",
      preRegistration: false,
      program: "",
      connectedСalendar: false,
      indivisibleVolume: true,
      participantsQuantity: 1,
      seasonality: "",
      slotSize: 2,
      slotVolume: 3,
    },
  },
  {
    id: "0004",
    providerId,
    characteristics: [
      {
        id: "",
        name: "",
        description: "",
        slotQuantity: 0,
        //duration: "",
        price: 0,
        priceDate: "",
      },
    ],
    name: "Свидание на крыше",
    status: true,
    description: {
      duration: "",
      autofill: false,
      possibilitySellingCertificate: false,
      address: "",
      info: "",
      limitations: "",
      phone: "",
      preRegistration: false,
      program: "",
      connectedСalendar: false,
      indivisibleVolume: true,
      participantsQuantity: 1,
      seasonality: "",
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
