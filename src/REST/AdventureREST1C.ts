import { fromUnixTime } from "date-fns";
import { IAdventureREST } from "../Model/Interfaces";
import { TAdventure, TAdventure_1C, TSetState } from "../Model/types";
import { RESTManager } from "./RESTManager";
// Импортирую методы по 1С ...body; Передаю необходимые аргументы, а вместо
// callback передаю state;
import {
  getProviderAdventureListBody,
  getAdventureDataBody,
  getRecordAdventureInfoBody,
  getTransferImageBody,
  convertTo1C,
  convert1CToReact,
} from "./rest1C";

class AdventureREST1C implements IAdventureREST {
  private providerId;
  constructor(providerId: string) {
    this.providerId = providerId;
  }
  getAdventureList = (setState: TSetState) => {
    getProviderAdventureListBody(({LIST_POSITION}:{LIST_POSITION: []}) => {
      console.log("list :>> ", LIST_POSITION);
      setState({
        list: LIST_POSITION.map((adv: any) => convert1CToReact(adv)),
      });
    }, this.providerId);
  };
  //   "51b1096a-3cd5-11ec-8122-001999b9620c"
  getAdventureById = (id: string, setState: TSetState) => {
    getAdventureDataBody((adv: TAdventure_1C) => {
        setState((state) => {       
            return { list: { ...state!.list }, adventure: convert1CToReact(adv)  };
        });
        console.log("adventure :>> ", adv);
    }, id);
  };

  createAdventure = (adventure: TAdventure, setState: TSetState) => {
    getRecordAdventureInfoBody((data: object) => {       
        console.log("data :>> ", data);
        this.getAdventureList(setState);  // Как здесь задействуется res?
    }, convertTo1C(adventure));

    // getTransferImageBody((data: object) => {
    //     *КОНВЕРТЕР*
    //     console.log("data :>> ", data);
    //     200, ОК, Приключение добавлено -> Вызываем информацию о приключении -> res;
    //     this.getAdventureList(setState);  // Как здесь задействуется res?
    // }, "ГУИД_ПРИКЛЮЧЕНИЯ");
  };

  updateAdventure = (adventure: TAdventure, setState: TSetState) => {
    getRecordAdventureInfoBody((data: object) => {
        console.log("data :>> ", data);
        this.getAdventureList(setState);  // Как здесь задействуется res?
    }, convertTo1C(adventure));
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
const {
  getAdventureList,
  getAdventureById,
  createAdventure,
  updateAdventure,
  removeAdventureById,
} = new AdventureREST1C("51b1096a-3cd5-11ec-8122-001999b9620c");
export {
  getAdventureList,
  getAdventureById,
  createAdventure,
  updateAdventure,
  removeAdventureById,
};
