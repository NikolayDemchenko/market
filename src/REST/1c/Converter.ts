import {
  TAdventure,
  TAdventure_1C,
  TCharacters_1C,
  TCharacteristic,
  TPosition_1C,
} from "../../Model/types";

export const convertTo1C = (adventure: TAdventure) => {
  // Конвертация adventure в тело запроса к 1с
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
    duration,
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
    ADVENTURE_DURATION: duration,
    ADDRESS: address,
    PHONE: phone,
    POSSIBILITY_SELLING_CERTIFICATE: possibilitySellingCertificate,
    SLOT_VOLUME: slotVolume, // Максимальное количество билетов;
    SLOT_SIZE: slotSize, // 10 минут, 30 минут и т.д.;
    AUTOFILL: true,
    // AUTOFILL: autofill,
    INDIVISIBLE_SLOT_VOLUME: indivisibleVolume,
    VIDEO_LIST: videos?.map((video) => video.url) || [], // Массив url;
    CHARACTERS: characteristics.map(
      ({ id, name, description, slotQuantity, price, priceDate }) => {
        const sendedPriceDate = priceDate
          ? `${priceDate.substr(6, 4)}-${priceDate.substr(
              3,
              2
            )}-${priceDate.substr(0, 2)}`
          : "";
        console.log("sendedPriceDate", sendedPriceDate);
        const charact: TCharacters_1C = {
          CHARACTER_GUID: id || "",
          CHARACTER_NAME: name,
          CHARACTER_DESCRITPION: description,
          SLOT_QUANTITY: slotQuantity,
          CHARACTER_PRICE: price,
          PRICE_START_DATE: sendedPriceDate,
          //   PRICE_START_DATE: "2022-10-10",
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

export const convert1CPositionTo1CAdventure = (position_1c: TPosition_1C) => {
  const { GUID, ACTIVE, GUID_PROVIDER, NAME, NAME_POVIDER }: TPosition_1C =
    position_1c;

  const adventureBody: TAdventure_1C = {
    PROVIDER_GUID: GUID_PROVIDER,
    ADVENTURE_GUID: GUID,
    ADVENTURE_NAME: NAME,
    ADVENTURE_PROGRAM: "",
    IMPORTANT_INFO: "",
    LIMITATIONS: "",
    PARTICIPANTS_QUANTITY: "",
    PRE_RECORDING: false,
    SEASONALITY: "",
    ADVENTURE_DURATION: "",
    ADDRESS: "",
    PHONE: "",
    POSSIBILITY_SELLING_CERTIFICATE: false,
    SLOT_VOLUME: 0, // Максимальное количество билетов;
    SLOT_SIZE: 0, // 10 минут, 30 минут и т.д.;
    AUTOFILL: false,
    INDIVISIBLE_SLOT_VOLUME: false,
    VIDEO_LIST: [], // Массив url;
    CHARACTERS: [
      {
        CHARACTER_GUID: "",
        CHARACTER_NAME: "",
        CHARACTER_DESCRITPION: "",
        SLOT_QUANTITY: 0,
        CHARACTER_PRICE: 0,
        PRICE_START_DATE: "",
      },
    ],
  };
  return adventureBody;
};
