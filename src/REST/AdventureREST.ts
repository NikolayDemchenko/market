import { TAdventure } from "../types/provider";
import { RESTManager } from "./RESTManager";

const {
  getCollection,
  getDocById,
  createDoc,
  updateDoc,
  getDocsByField,
  updateField,
  removeDocById,
  getUniqueValues,
} = RESTManager("adventures");

export const createAdventure = (
  adventureState: TAdventure,
  setState: Function
) => {
  const { id, ...newAdventure } = adventureState;
  createDoc(newAdventure).then((data) => {
    console.log("data :>> ", data);
    getDocById(data.insertedId).then((adventure) => {
      const { _id, ...adv } = adventure;
      setState({ ...adv, id: _id });
    });
  });
};
