import axios from "axios";
interface Irest1c {
  (methodName: string, requestBody: object, responseHandler: Function): void;
}
export const crossRest1c: Irest1c = async (
  methodName: string,
  requestBody: object,
  responseHandler: Function
) => {
  console.log(
    `%cpost CROSS request ${methodName} :>>`,
    "background: #9cf; ",
    requestBody
  );
  try {
    const res = await axios({
      method: "post",
      url: `http://localhost:8000/rest1c`,
      data: { methodName, requestBody },
    });
    console.log(
      `%cpost CROSS response ${methodName}:>>`,
      "background: #cfc; ",
      res.data
    );
    responseHandler(res.data);
  } catch (e) {
    console.error(e);
  }
};

export const rest1c: Irest1c = async (
  methodName: string,
  requestBody: object,
  responseHandler: Function
) => {
  // Универсальный метод запросов к 1С
  console.log(
    `%c ${methodName} ----> request :>>`,
    "background: #9cf; ",
    requestBody
  );
  let xhr = new XMLHttpRequest();
  xhr.open("POST", `https://1c.hslon.ru/erp_slon_http/hs/CLNDR/${methodName}`);
  xhr.responseType = "json";
  xhr.send(JSON.stringify(requestBody));
  xhr.onload = () => {
    if (xhr.status !== 200) console.log("Ошибка соединения.");
    console.log(
      `%c ${methodName} <---- response :>>`,
      "background: #cfc; ",
      xhr.response
    );
    responseHandler(xhr.response);
  };
};

export class RestSelector {
  private rest1C;
  constructor(rest1C: Irest1c) {
    this.rest1C = rest1C;
  }
  // Получение списка номенклатур по конкретному поставщику: 15.LIST_POSITION.
  getAdventureList = (callback: Function, GUID_PROVIDER: string) => {
    this.rest1C(
      "LIST_POSITION",
      {
        GUID_PROVIDER,
        ACTIVE: true,
      },
      callback
    );
  };
  // Пример запроса:
  // {
  //     "GUID_PROVIDER": "51b1096a-3cd5-11ec-8122-001999b9620c"
  // }

  // Возвращает информацию по заданной номенклатуре: 16.GET_INFO_POSITION.
  getAdventure = (callback: Function, ADVENTURE_GUID: string) => {
    this.rest1C(
      "GET_INFO_POSITION",
      {
        ADVENTURE_GUID,
      },
      callback
    );
  };
  // Пример запроса:
  // {
  //     "ADVENTURE_GUID": "6d5b172f-31b0-11ec-8122-001999b9620c"
  // }

  // Редактирует текущую номенклатуру, либо создает новую и записывает новый guid
  // номенклатуры: 17.RECORD_INFO_POSITION.
  createAdventure = (
    // Вызываем, например, при нажатии на кнопку 1С;
    body: object,
    callback: Function
  ) => {
    // ADVENTURE_LINK: "",
    this.rest1C("RECORD_INFO_POSITION", body, callback);
  };

  // Пример запроса:
  //     "PROVIDER_GUID": "51b1096a-3cd5-11ec-8122-001999b9620c",
  //     "ADVENTURE_GUID": "6d5b172f-31b0-11ec-8122-001999b9620c",
  //     "ADVENTURE_NAME": "ZUMBA / ЗУМБА. Воронеж. Серафима. 2021",
  //     "ADVENTURE_PROGRAM": "Программа приключения ZUMBA ....... ",
  //     "IMPORTANT_INFO": "Важная информация для участия в приключении ZUMBA .....",
  //     "LIMITATIONS": "",
  //     "PARTICIPANTS_QUANTITY": "",
  //     "PRE_RECORDING": false,
  //     "SEASONALITY": "",
  //     "ADVENTURE_DURATION": -1,
  //     "ADDRESS": "",
  //     "PHONE": "",
  //     "POSSIBILITY_SELLING_CERTIFICATE": false,
  //     "SLOT_VOLUME": 60,
  //     "SLOT_SIZE": 10,
  //     "AUTOFILL": true,
  //     "INDIVISIBLE_SLOT_VOLUME": false,
  //     "VIDEO_LIST": [
  //         "https://hslon.ru/catalog/detail/zumba_zumba/"
  //     ],
  //     "CHARACTERS": [
  //         {
  //             "CHARACTER_GUID": "b12cc4c8-31b0-11ec-8122-001999b9620c",
  //             "CHARACTER_NAME": "1 занятие",
  //             "CHARACTER_DESCRITPION": 1,
  //             "SLOT_QUANTITY": 1,
  //             "CHARACTER_PRICE": 1,
  //             "PRICE_START_DATE": ""
  //         },
  //         {
  //             "CHARACTER_GUID": "cc6ce581-31b0-11ec-8122-001999b9620c",
  //             "CHARACTER_NAME": "4 занятия",
  //             "CHARACTER_DESCRITPION": 1,
  //             "SLOT_QUANTITY": 1,
  //             "CHARACTER_PRICE": 1500,
  //             "PRICE_START_DATE": ""
  //         },
  //         {
  //             "CHARACTER_GUID": "cc6ce582-31b0-11ec-8122-001999b9620c",
  //             "CHARACTER_NAME": "8 занятий",
  //             "CHARACTER_DESCRITPION": 1,
  //             "SLOT_QUANTITY": 1,
  //             "CHARACTER_PRICE": 2500,
  //             "PRICE_START_DATE": ""
  //         }
  //     ]
  // }

  // const body = {
  //     PROVIDER_GUID,
  //     ADVENTURE_GUID,
  //     ADVENTURE_NAME: "",
  //     ADVENTURE_PROGRAM: "",
  //     IMPORTANT_INFO: "",
  //     LIMITATIONS: "",
  //     PARTICIPANTS_QUANTITY: "",
  //     PRE_RECORDING: false,
  //     SEASONALITY: "",
  //     ADVENTURE_DURATION: "",
  //     ADDRESS: "",
  //     PHONE: "",
  //     POSSIBILITY_SELLING_CERTIFICATE: false,
  //     SLOT_VOLUME: 0,  // Максимальное количество билетов;
  //     SLOT_SIZE: 0,  // 10 минут, 30 минут и т.д.;
  //     AUTOFILL: false,
  //     INDIVISIBLE_SLOT_VOLUME: false,
  //     VIDEO_LIST: [],  // Массив url;
  //     CHARACTERS: [
  //         {
  //             CHARACTER_GUID: "",
  //             CHARACTER_NAME: "",
  //             CHARACTER_DESCRITPION: "",
  //             SLOT_QUANTITY: "",
  //             CHARACTER_PRICE: 0,
  //             PRICE_START_DATE: "",
  //         }
  //     ]
  // };

  sendImages = (
    ADVENTURE_GUID: string,
    PHOTOS: object[],
    callback: Function
  ) => {
    console.log("PHOTOS :>> ", PHOTOS);
    this.rest1C(
      "TRANSFER_FILE",
      {
        ADVENTURE_GUID,
        PHOTOS,
      },
      callback
    );
  };

  getImages = (callback: Function, ADVENTURE_GUID: string) => {
    this.rest1C(
      "GET_ADVENTURE_IMAGE_LIST",
      {
        ADVENTURE_GUID,
      },
      callback
    );
  };
}
