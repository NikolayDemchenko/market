import {
  TAdventure,
  TAdventure_1C,
  TCharacteristic,
  TCharacters_1C,
} from "../Model/types";

export async function rest1C(
  methodName: string,
  requestBody: object,
  responseHandler: Function
) {
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
      `%c ${methodName} ----> response :>>`,
      "background: #cfc; ",
      xhr.response
    );
    responseHandler(xhr.response);
  };
}

// Получение списка номенклатур по конкретному поставщику: 15.LIST_POSITION.
const getProviderAdventureListBody = (
  callback: Function,
  GUID_PROVIDER: string
) => {
  rest1C(
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
const getAdventureDataBody = (callback: Function, ADVENTURE_GUID: string) => {
  rest1C(
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
const getRecordAdventureInfoBody = (
  // Вызываем, например, при нажатии на кнопку 1С;
  callback: Function,
  body: object
) => {
  // ADVENTURE_LINK: "",
  rest1C("RECORD_INFO_POSITION", body, callback);
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

const getTransferImageBody = (callback: Function, ADVENTURE_GUID: string) => {
  rest1C(
    "TRANSFER_FILE",
    {
      ADVENTURE_GUID,
      PHOTOS: [
        {
          NAME: "",
          EXTANTION: "",
          PHOTO: "", // Строка Base64;
        },
      ],
    },
    callback
  );
};

export {
  getProviderAdventureListBody,
  getAdventureDataBody,
  getRecordAdventureInfoBody,
  getTransferImageBody,
};

export const convertTo1C = (adventure: TAdventure) => {
  // ADVENTURE_LINK: "",
  const { id, providerId, name, description, videos, characteristics } =
    adventure;
  const {
    program,
    info,
    limitations,
    participantsQuantity,
    preRegistration,
    seasonality,
    address,
    phone,
    slotVolume,
    slotSize,
    indivisibleVolume,
    possibilitySellingCertificate,
    autofill,
  } = description;
  const adventureBody: TAdventure_1C = {
    PROVIDER_GUID: providerId,
    ADVENTURE_GUID: id,
    ADVENTURE_NAME: name,
    ADVENTURE_PROGRAM: program,
    IMPORTANT_INFO: info,
    LIMITATIONS: limitations,
    PARTICIPANTS_QUANTITY: `${participantsQuantity}`,
    PRE_RECORDING: preRegistration,
    SEASONALITY: seasonality,
    ADVENTURE_DURATION: "1 час",
    ADDRESS: address,
    PHONE: phone,
    POSSIBILITY_SELLING_CERTIFICATE: possibilitySellingCertificate,
    SLOT_VOLUME: slotVolume, // Максимальное количество билетов;
    SLOT_SIZE: slotSize, // 10 минут, 30 минут и т.д.;
    AUTOFILL: autofill,
    INDIVISIBLE_SLOT_VOLUME: indivisibleVolume,
    VIDEO_LIST: videos?.map((video) => video.url) || [], // Массив url;
    CHARACTERS: characteristics.map(
      ({ id, name, description, slotQuantity, price, priceDate }) => {
        const charact: TCharacters_1C = {
          CHARACTER_GUID: id,
          CHARACTER_NAME: name,
          CHARACTER_DESCRITPION: description,
          SLOT_QUANTITY: `${slotQuantity}`,
          CHARACTER_PRICE: price,
          PRICE_START_DATE: priceDate,
        };
        return charact;
      }
    ),
  };
  return adventureBody;
};
export const convert1CToReact = (adventure_1c: TAdventure_1C) => {
  const {
    PROVIDER_GUID,
    ADVENTURE_GUID,
    ADVENTURE_NAME,
    ADVENTURE_PROGRAM,
    IMPORTANT_INFO,
    LIMITATIONS,
    PARTICIPANTS_QUANTITY,
    PRE_RECORDING,
    SEASONALITY,
    ADVENTURE_DURATION,
    ADDRESS,
    PHONE,
    POSSIBILITY_SELLING_CERTIFICATE,
    SLOT_VOLUME,
    SLOT_SIZE,
    AUTOFILL,
    INDIVISIBLE_SLOT_VOLUME,
    VIDEO_LIST,
    CHARACTERS,
  } = adventure_1c;
  const reactAdventure: TAdventure = {
    id: ADVENTURE_GUID,
    providerId: PROVIDER_GUID,
    name: ADVENTURE_NAME,
    status: false,
    description: {
      program: ADVENTURE_PROGRAM,
      info: IMPORTANT_INFO,
      limitations: LIMITATIONS,
      participantsQuantity: +PARTICIPANTS_QUANTITY,
      preRegistration: PRE_RECORDING,
      seasonality: SEASONALITY,
      address: ADDRESS,
      phone: PHONE,
      slotVolume: SLOT_VOLUME,
      slotSize: SLOT_SIZE,
      connectedСalendar: false,
      indivisibleVolume: INDIVISIBLE_SLOT_VOLUME,
      possibilitySellingCertificate: POSSIBILITY_SELLING_CERTIFICATE,
      autofill: AUTOFILL,
      duration: ADVENTURE_DURATION,
    },
    videos: VIDEO_LIST.map((url) => ({ url })),
    characteristics: CHARACTERS.map(
      ({
        CHARACTER_GUID,
        CHARACTER_NAME,
        CHARACTER_DESCRITPION,
        SLOT_QUANTITY,
        CHARACTER_PRICE,
        PRICE_START_DATE,
      }) => {
        const charact: TCharacteristic = {
          id: CHARACTER_GUID,
          name: CHARACTER_NAME,
          description: CHARACTER_DESCRITPION,
          slotQuantity: +SLOT_QUANTITY,
          price: CHARACTER_PRICE,
          priceDate: PRICE_START_DATE,
        };
        return charact;
      }
    ),
  };
  return reactAdventure;
};
