import { TAdventure, TSetState } from "./types"

  export interface IAdventureREST{
    getAdventureList(setState: TSetState): void    
    getAdventureById(id: string, setState: TSetState): void
    createAdventure(adventure: TAdventure, setState: TSetState): void
    updateAdventure(adventure: TAdventure, setState: TSetState): void
    removeAdventureById(id: string, setState: TSetState): void
  }