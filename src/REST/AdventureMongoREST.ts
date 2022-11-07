import { IAdventureREST } from "../Model/Interfaces";
import { TAdventure, TSetState } from "../Model/types";
import { RESTManager } from "./RESTManager";

const { getCollection, getDocById, createDoc, updateDoc, removeDocById } =
  RESTManager("adventures");

class AdventureMongoREST implements IAdventureREST {
  getAdventureList = (setState: TSetState) =>{
    // getCollection().then((list) => {
    //   setState({
    //     list: list.map((adv: any) => {
    //       const { _id, ...adventure } = adv;
    //       const frontAdventure = { ...adventure, id: _id };
    //       // console.log('frontAdventure :>> ', frontAdventure);
    //       return frontAdventure;
    //     }),
    //   });
    // })
  };

  getAdventureById = (id: string, setState: TSetState) => {
    // getDocById(id).then((adventure) => {
    //   setState((state) => {
    //     const { _id, ...adv } = adventure;
    //     return { list: { ...state!.list }, adventure: { ...adv, id: _id } };
    //   });
    // });
  };

  createAdventure = (adventure: TAdventure, setState: TSetState) => {
    // createDoc(adventure).then((data) => {
    //   this.getAdventureList(setState);
    // });
  };

  updateAdventure = (adventure: TAdventure, setState: TSetState) => {
    const { id, ..._adventure } = adventure;
    // updateDoc({ ..._adventure, _id: id }).then((adv) => {
    //   this.getAdventureList(setState);
    // });
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
} = new AdventureMongoREST();
export {
  getAdventureList,
  getAdventureById,
  createAdventure,
  updateAdventure,
  removeAdventureById,
};
