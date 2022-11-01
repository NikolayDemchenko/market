import { Guid } from "guid-typescript";

// Поставщик
type Provider = {
  id: Guid;
  name: string;
  phone: number;
  details: Details;
  adventures: Adventure[];
};
// Реквизиты поставщика
type Details = {
  name: string;
  inn: string;
};
// Приключение

type Adventure = {
  id: string;
  name: string;
  img: string;
  status: boolean;
  images?: [];
  videos?: [];
  lots?: AdventureLot[];
};
// Характеристика
type AdventureLot = {
  name: string;
  description: string;
  personAmount: number;
  options: Option[];
};
type Option = {
  name: string;
  description: string;
  duration: string;
  price: number;
};
export type { Provider, Details, Adventure, Option,AdventureLot };
