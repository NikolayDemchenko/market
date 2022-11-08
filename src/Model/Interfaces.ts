import { TAdventure, TSetState } from "./types"

  export interface IAdventureREST{
    getAdventureList(setState: TSetState): void    
    getAdventureById(id: string, setState: TSetState): void
    createAdventure(adventure: TAdventure, setState: TSetState): void
    updateAdventure(adventure: TAdventure, setState: TSetState): void
    removeAdventureById(id: string, setState: TSetState): void
  }

  class rest implements IAdventureREST{
    getAdventureList(setState: TSetState): void {
      throw new Error("Method not implemented.")
    }
    getAdventureById(id: string, setState: TSetState): void {
      throw new Error("Method not implemented.")
    }
    createAdventure(adventure: TAdventure, setState: TSetState): void {
      throw new Error("Method not implemented.")
    }
    updateAdventure(adventure: TAdventure, setState: TSetState): void {
      throw new Error("Method not implemented.")
    }
    removeAdventureById(id: string, setState: TSetState): void {
      throw new Error("Method not implemented.")
    }
}