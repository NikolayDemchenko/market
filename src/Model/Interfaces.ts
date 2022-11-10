import { TAdventure, TSetState, TState } from "./types"

  export interface IAdventureREST{
    getAdventureList(setState: TSetState): void    
    getAdventureById(id: string, setState: TSetState): void
    createAdventure(state: TState, setState: TSetState): void
    updateAdventure(state: TState, setState: TSetState): void
    removeAdventureById(id: string, setState: TSetState): void
  }

  class rest implements IAdventureREST{
    getAdventureList(setState: TSetState): void {
      throw new Error("Method not implemented.")
    }
    getAdventureById(id: string, setState: TSetState): void {
      throw new Error("Method not implemented.")
    }
    createAdventure(state: TState, setState: TSetState): void {
      throw new Error("Method not implemented.")
    }
    updateAdventure(state: TState, setState: TSetState): void {
      throw new Error("Method not implemented.")
    }
    removeAdventureById(id: string, setState: TSetState): void {
      throw new Error("Method not implemented.")
    }
}