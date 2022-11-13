import { fromUnixTime } from "date-fns";
import { IAdventureREST } from "../../Model/Interfaces";
import {
  TAdventure,
  TAdventureImage,
  TAdventure_1C,
  TImage1C,
  TImagesResponse1C,
  TPosition_1C,
  TSetState,
  TState,
} from "../../Model/types";

import { b64toBlob } from "./base64ToBlob";

// Импортирую методы по 1С ...body; Передаю необходимые аргументы, а вместо
// callback передаю state;
import {
  convertTo1C,
  convert1CToReact,
  convert1CPositionTo1CAdventure,
} from "./Converter";
import { RestSelector } from "./rest1C";

export class AdventureREST1C implements IAdventureREST {
  restSelector: RestSelector;
  private providerId;
  constructor(providerId: string, restTransfer: RestSelector) {
    this.providerId = providerId;
    this.restSelector = restTransfer;
  }
  getAdventureList = (setState: TSetState) => {
    setState((state) => ({ ...state, spinner: true }));
    this.restSelector.getAdventureList(
      ({ LIST_POSITION }: { LIST_POSITION: TPosition_1C[] }) => {
        console.log("LIST_POSITION :>> ", LIST_POSITION);
        setState({
          spinner: false,
          list: LIST_POSITION.map((adv: TPosition_1C) =>
            convert1CToReact(convert1CPositionTo1CAdventure(adv))
          ),
        });
      },
      this.providerId
    );
  };
  //   "51b1096a-3cd5-11ec-8122-001999b9620c"
  getAdventureById = (id: string, setState: TSetState) => {
    setState((state) => ({ ...state, spinner: true }));
    this.restSelector.getAdventure((adv: TAdventure_1C) => {
      this.restSelector.getImages((response: TImagesResponse1C) => {
        let images = response.PHOTOS.map((el: TImage1C): TAdventureImage => {
          console.log("el :>> ", el);
          const image: TAdventureImage = {
            img: b64toBlob(el.PHOTO, "image/jpg"),
            title: "",
            requestData: {
              imgBase64: el.PHOTO,
              imgName: el.NAME,
              imgExtension: el.EXTANTION,
            },
          };
          return image;
        });
        setState((state) => {
          return {
            spinner: false,
            list: { ...state!.list },
            adventure: {
              ...convert1CToReact(adv),
              images,
            },
          };
        });
      }, adv.ADVENTURE_GUID); // Передавать гуид приключения; 3d6b2347-5f39-11ed-814b-001999b9620c
    }, id);
  };

  createAdventure = (state: TState, setState: TSetState) => {
    setState((state) => ({ ...state, spinner: true }));
    const { adventure } = state;
    this.restSelector.createAdventure(
      convertTo1C(adventure!),
      (data: { ADVENTURE_GUID: string }) => {
        console.log("data :>> ", data);
        this.sendImages(data, state, (response: object) => {
          console.log("response :>> ", response);
        });
        this.getAdventureList(setState);
      }
    );
  };
  sendImages = (
    data: { ADVENTURE_GUID: string },
    state: TState,
    callback: Function
  ) => {
    this.restSelector.sendImages(
      data.ADVENTURE_GUID,
      state.adventure!.images!.map((image) => {
        const { imgBase64, imgExtension, imgName } = image.requestData;
        return {
          NAME: imgName,
          EXTANTION: imgExtension,
          PHOTO: imgBase64,
        };
      }),
      callback
    );
  };

  updateAdventure = (state: TState, setState: TSetState) => {
    setState((state) => ({ ...state, spinner: true }));
    const { adventure } = state;
    this.restSelector.createAdventure(
      convertTo1C(adventure!),
      (data: { ADVENTURE_GUID: string }) => {
        this.sendImages(data, state, () => {
          this.getAdventureList(setState); // Как здесь задействуется res?
        });
      }
    );
    // getTransferImageBody((data: object) => {
    //     *КОНВЕРТЕР*
    //     console.log("data :>> ", data);
    //     200, ОК, Приключение добавлено -> Вызываем информацию о приключении -> res;
    //     this.getAdventureList(setState);  // Как здесь задействуется res?
    // }, "ГУИД_ПРИКЛЮЧЕНИЯ");
  };

  removeAdventureById = (id: string, setState: TSetState) => {
    // removeDocById(id).then(() => {
    //   this.getAdventureList(setState);
    // });
  };
}
