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
  id: Guid;
  name: string;
  characts: Charact[];
};
// Приключение в списке приключений;
type AdventureItem = {
  id: string;
  advName: string;
  img: string;
  status: string;
};
// Характеристика
type Charact = {
  id: Guid;
  text: string;
  duration: string;
  price: number;
};
export type { Provider, Details, Adventure, AdventureItem, Charact };
