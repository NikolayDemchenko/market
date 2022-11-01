import * as React from 'react';
import { Adventure } from "../../../types/provider";
import AdventureListView from "./AdventureListView";

// Получаем из бд список приключений (скорее всего, массив объектов);
let adventures: Adventure[] = [
    {
        id: '0001',
        name: 'Катание на квадроцикле',
        img: '',
        status: true,
    },
    {
        id: '0002',
        name: 'Страйкбол',
        img: '',
        status: true,
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
    },
];

export default function AdventureList() {
  function getAdventureData() {
    return adventures;
  }

  function onClickBtn(value: any) {
    console.log(value);
  }

  function onClickItem() {
    console.log('Нажали на приключение в списке.');
  }

  function checkedToggle(value: { adventure: object, checked: boolean }) {
    console.log(value);
  }

  return (
    <AdventureListView { ...{
        adventures: getAdventureData(), 
        onClickBtn, 
        onClickItem,
        checkedToggle
    } } />
  );
}