import * as React from 'react';
import {TAdventure } from "../../../types/provider";
import AdventureListView from "./AdventureListView";



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

// Получаем из бд список приключений (скорее всего, массив объектов);
let adventures: TAdventure[] = [
    {
        id: '0001',
        name: 'Катание на квадроцикле',
        img: '',
        status: true,
        description:{address:"",info:"",limitations:"",phone:"",preRegistration:false,program:"",connectedСalendar:false,indivisibleVolume:true,peopleAmount:1,seasonality:"январь, март",slotSize:2,slotVolume:3}
    },
    {
        id: '0002',
        name: 'Страйкбол',
        img: '',
        status: true,
        description:{address:"",info:"",limitations:"",phone:"",preRegistration:false,program:"",connectedСalendar:false,indivisibleVolume:true,peopleAmount:1,seasonality:"январь, март",slotSize:2,slotVolume:3}
    },
    {
        id: '0003',
        name: 'Полёт в аэротрубе',
        img: '',
        status: false,
        description:{address:"",info:"",limitations:"",phone:"",preRegistration:false,program:"",connectedСalendar:false,indivisibleVolume:true,peopleAmount:1,seasonality:"январь, март",slotSize:2,slotVolume:3}
    },
    {
        id: '0004',
        name: 'Свидание на крыше',
        img: '',
        status: true,
        description:{address:"",info:"",limitations:"",phone:"",preRegistration:false,program:"",connectedСalendar:false,indivisibleVolume:true,peopleAmount:1,seasonality:"январь, март",slotSize:2,slotVolume:3}
    },   
];