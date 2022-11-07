import { Guid } from "guid-typescript";

// Поставщик
type TProvider = {
  id: Guid;
  name: string;
  phone: string;
  details: TDetails;
  adventures: TAdventure[];
};
// Реквизиты поставщика
type TDetails = {
  name: string;
  inn: string;
};

// Общий стейт и сетстейт
type TState = { list: TAdventure[]; adventure?: TAdventure };
type TSetState = React.Dispatch<React.SetStateAction<TState>>;

// Приключение
type TAdventure = {
  id: string;
  name: string;
  status: boolean;
  description?: TDescription;
  images?: TAdventureImage[];
  videos?: TAdventureVideo[];
  characteristics?: TCharacteristic[];
  checked?:boolean
};
// Блок описания
type TDescription = {
  program: string;
  info: string;
  limitations: string;
  peopleAmount: number;
  preRegistration: boolean;
  seasonality: string;
  address: string;
  phone: string;
  slotVolume: number;
  slotSize: number;
  connectedСalendar: boolean;
  indivisibleVolume: boolean;
};
// Характеристика
type TCharacteristic = {
  name: string;
  description: string;
  slotAmount: number;
  duration: string;
  price: number;
  priceData: string;
  checked?: boolean;
};
enum Monts {
  "январь" = "январь",
  "февраль" = "февраль",
  "март" = "март",
  "апрель" = "апрель",
  "май" = "май",
  "июнь" = "июнь",
  "июль" = "июль",
  "август" = "август",
  "сентябрь" = "сентябрь",
  "октябрь" = "октябрь",
  "ноябрь" = "ноябрь",
  "декабрь" = "декабрь",
}
type TAdventureImage = {
  img: string;
  title: string;
  checked?: boolean;
};
type TAdventureVideo = {
  video: string;
  title: string;
  checked?: boolean;
};

type TAdventureLot = {
  name: string;
  description: string;
  personAmount: number;
  options: TOption[];
};
type TOption = {
  name: string;
  description: string;
  duration: string;
  price: number;
};
export type {
  Monts,
  TProvider,
  TDetails,
  TAdventure,
  TOption,
  TAdventureLot,
  TAdventureImage,
  TDescription,
  TAdventureVideo,
  TCharacteristic,
  TState,
  TSetState,
};
