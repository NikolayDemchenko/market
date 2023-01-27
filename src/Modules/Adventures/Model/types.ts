import { Guid } from "guid-typescript";
export enum Monts {
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
// Поставщик
export type TProvider = {
  id: Guid;
  name: string;
  phone: string;
  details: TDetails;
  adventures: TAdventure[];
};
// Реквизиты поставщика
export type TDetails = {
  name: string;
  inn: string;
};

// Общий стейт и сетстейт
export type TState = { list: TAdventure[]; adventure?: TAdventure,spinner?:boolean };
export type TSetState = React.Dispatch<React.SetStateAction<TState>>;

// Приключение
export type TAdventure = {
  id: string;
  providerId: string;
  name: string;
  status: boolean;
  description: TDescription;
  images?: TAdventureImage[];
  videos?: TAdventureVideo[];
  characteristics: TCharacteristic[];
  checked?: boolean;
};
export type TAdventureMongoDB = {
  _id: string;
  providerId: string;
  name: string;
  status: boolean;
  description: TDescription;
  images?: TAdventureImage[];
  videos?: TAdventureVideo[];
  characteristics: TCharacteristic[];
  checked?: boolean;
};
// Блок описания
export type TDescription = {
  program: string;
  info: string;
  limitations: string;
  participantsQuantity: number;
  preRegistration: boolean;
  seasonality: string;
  address: string;
  phone: string;
  slotVolume: number;
  slotSize: number;
  connectedСalendar: boolean;
  indivisibleVolume: boolean;
  possibilitySellingCertificate: boolean;
  autofill: boolean;
  duration: string;
};
// Характеристика
export type TCharacteristic = {
  id?: string;
  name: string;
  description: string;
  slotQuantity: number;
  // duration: string;
  price: number;
  priceDate: string;
  checked?: boolean;
};

export type TAdventureImage = {
  img: string;
  title: string;
  requestData: TImageRequestData;
  checked?: boolean;
};
export type TImageRequestData = {
  imgBase64: string;
  imgName: string;
  imgExtension: string;
};
export type TAdventureVideo = {
  url: string;
  title?: string;
  checked?: boolean;
};

export type TPosition_1C = {
  GUID_PROVIDER: string;
  NAME_POVIDER: string;
  GUID: string;
  NAME: string;
  ACTIVE: boolean;
};
export type TAdventure_1C = {
  PROVIDER_GUID: string;
  ADVENTURE_GUID: string;
  ADVENTURE_NAME: string;
  ADVENTURE_PROGRAM: string;
  IMPORTANT_INFO: string;
  LIMITATIONS: string;
  PARTICIPANTS_QUANTITY: string;
  PRE_RECORDING: boolean;
  SEASONALITY: string;
  ADVENTURE_DURATION: string;
  ADDRESS: string;
  PHONE: string;
  POSSIBILITY_SELLING_CERTIFICATE: boolean;
  SLOT_VOLUME: number; // Максимальное количество билетов;
  SLOT_SIZE: number; // 10 минут, 30 минут и т.д.;
  AUTOFILL: boolean;
  INDIVISIBLE_SLOT_VOLUME: boolean;
  VIDEO_LIST: string[]; // Массив url;
  CHARACTERS: TCharacters_1C[];
};

export type TCharacters_1C = {
  CHARACTER_GUID: string;
  CHARACTER_NAME: string;
  CHARACTER_DESCRITPION: string;
  SLOT_QUANTITY: number;
  CHARACTER_PRICE: number;
  PRICE_START_DATE: string;
};

export type TImagesResponse1C={
  STATUS_CODE: number
  STATUS_NAME: string
  STATUS_TEXT: string
  DURATION: number
  PHOTOS:TImage1C []
}
export type TImage1C = {
  PHOTO: string;
  NAME: string;
  EXTANTION: string;
};





export type TAdventureLot = {
  name: string;
  description: string;
  personAmount: number;
};
export type TOption = {
  name: string;
  description: string;
  duration: string;
  price: number;
};
