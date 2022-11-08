import { Guid } from "guid-typescript";
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
type TDescription = {
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
type TCharacteristic = {
  id?: string;
  name: string;
  description: string;
  slotQuantity: number;
  // duration: string;
  price: number;
  priceDate: string;
  checked?: boolean;
};

type TAdventureImage = {
  img: string;
  title: string;
  checked?: boolean;
};
type TAdventureVideo = {
  url: string;
  title?: string;
  checked?: boolean;
};

type TAdventure_1C = {
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
type TCharacters_1C = {
  CHARACTER_GUID?: string;
  CHARACTER_NAME: string;
  CHARACTER_DESCRITPION: string;
  SLOT_QUANTITY: string;
  CHARACTER_PRICE: number;
  PRICE_START_DATE: string;
};

type TAdventureLot = {
  name: string;
  description: string;
  personAmount: number;
};
type TOption = {
  name: string;
  description: string;
  duration: string;
  price: number;
};

export type {
  TAdventureLot,
  TOption,
  Monts,
  TProvider,
  TDetails,
  TAdventure,
  TAdventure_1C,
  TCharacters_1C,
  TAdventureImage,
  TDescription,
  TAdventureVideo,
  TCharacteristic,
  TState,
  TSetState,
};
