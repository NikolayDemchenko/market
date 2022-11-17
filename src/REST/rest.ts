import { AdventureMongoREST } from "./Mongo/AdventureMongoREST";
import { AdventureREST1C } from "./1c/AdventureREST1C";
import  * as restModule from   "./1c/rest1C";

export const {
    getAdventureList,
    getAdventureById,
    createAdventure,
    updateAdventure,
    removeAdventureById,
  } = new AdventureMongoREST("51b1096a-3cd5-11ec-8122-001999b9620c");

// Для дев сервера ---------------------------------------

// export const {
//       getAdventureList,
//       getAdventureById,
//       createAdventure,
//       updateAdventure,
//       removeAdventureById,
//     } = new AdventureREST1C(`${document.querySelector(".providerinfo")!.getAttribute('data-provider')}`,new restModule.RestSelector(restModule.rest1c));
//--------------------------------------------------------


// Локальный тестовый ------------------------------------

// export const {
//   getAdventureList,
//   getAdventureById,
//   createAdventure,
//   updateAdventure,
//   removeAdventureById,
// } = new AdventureREST1C(
//   "31339195-bd9c-11e7-80c4-000c2974d6cb",
//   new restModule.RestSelector(restModule.rest1c)
// );