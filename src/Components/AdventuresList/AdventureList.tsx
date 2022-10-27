
import { AdventureItem } from "../../types/provider";
import AdventureListView from "./AdventureListView";
// Получаем из бд список приключений (скорее всего, массив объектов);
let adventures: AdventureItem[] = [
    {
        id: '0001',
        advName: 'Катание на квадроцикле',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0002',
        advName: 'Страйкбол',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0003',
        advName: 'Полёт в аэротрубе',
        img: '',
        status: 'Черновик',
    },
    {
        id: '0004',
        advName: 'Свидание на крыше',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0003',
        advName: 'Полёт в аэротрубе',
        img: '',
        status: 'Черновик',
    },
    {
        id: '0004',
        advName: 'Свидание на крыше',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0003',
        advName: 'Полёт в аэротрубе',
        img: '',
        status: 'Черновик',
    },
    {
        id: '0004',
        advName: 'Свидание на крыше',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0003',
        advName: 'Полёт в аэротрубе',
        img: '',
        status: 'Черновик',
    },
    {
        id: '0004',
        advName: 'Свидание на крыше',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0003',
        advName: 'Полёт в аэротрубе',
        img: '',
        status: 'Черновик',
    },
    {
        id: '0004',
        advName: 'Свидание на крыше',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0003',
        advName: 'Полёт в аэротрубе',
        img: '',
        status: 'Черновик',
    },
    {
        id: '0004',
        advName: 'Свидание на крыше',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0003',
        advName: 'Полёт в аэротрубе',
        img: '',
        status: 'Черновик',
    },
    {
        id: '0004',
        advName: 'Свидание на крыше',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0003',
        advName: 'Полёт в аэротрубе',
        img: '',
        status: 'Черновик',
    },
    {
        id: '0004',
        advName: 'Свидание на крыше',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0003',
        advName: 'Полёт в аэротрубе',
        img: '',
        status: 'Черновик',
    },
    {
        id: '0004',
        advName: 'Свидание на крыше',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0003',
        advName: 'Полёт в аэротрубе',
        img: '',
        status: 'Черновик',
    },
    {
        id: '0004',
        advName: 'Свидание на крыше',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0003',
        advName: 'Полёт в аэротрубе',
        img: '',
        status: 'Черновик',
    },
    {
        id: '0004',
        advName: 'Свидание на крыше',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0003',
        advName: 'Полёт в аэротрубе',
        img: '',
        status: 'Черновик',
    },
    {
        id: '0004',
        advName: 'Свидание на крыше',
        img: '',
        status: 'Опубликовано',
    },
    {
        id: '0003',
        advName: 'Полёт в аэротрубе',
        img: '',
        status: 'Черновик',
    },
    {
        id: '0004',
        advName: 'Свидание на крыше',
        img: '',
        status: 'Опубликовано',
    },
];

export default function AdventureList() {
  return (
    <AdventureListView { ...{adventures} } />
  );
}