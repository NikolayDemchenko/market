import { IItemREST } from "../Interfaces";
import { TAdventure, TAdventureMongoDB, TSetState, TState } from "../../../Adventures/Model/types";
import { RESTManager } from "./RESTManager";

const { getCollection, getDocById, createDoc, updateDoc, removeDocById } =
  RESTManager("adventures");

export class AdventureMongoREST implements IItemREST {
  private providerId;
  constructor(providerId: string) {
    this.providerId = providerId;
  }

  getItemList = (setState: TSetState) =>{
    getCollection(this.providerId).then((list) => {
      setState({
        list: list.map((adv: TAdventureMongoDB) => {
          const { _id, ...adventure } = adv;
          const frontAdventure:TAdventure = { ...adventure, id: _id };
          // console.log('frontAdventure :>> ', frontAdventure);
          return frontAdventure;
        }),
      });
    })
  };

  getItemById = (id: string, setState: TSetState) => {
    getDocById(id).then((adventure) => {
      setState((state) => {
        const { _id, ...adv } = adventure;
        return { list: { ...state!.list }, adventure: { ...adv, id: _id } };
      });
    });
  };

  createItem = ({adventure}: TState, setState: TSetState) => {
    createDoc(adventure).then((data) => {
      this.getItemList(setState);
    });
  };

  updateItem = ({adventure}: TState, setState: TSetState) => {
    const { id, ..._adventure } = adventure!;
    updateDoc({ ..._adventure, _id: id }).then((adv) => {
      this.getItemList(setState);
    });
  };
  removeItemById = (id: string, setState: TSetState) => {
    removeDocById(id).then(() => {
      this.getItemList(setState);
    });
  };
}
