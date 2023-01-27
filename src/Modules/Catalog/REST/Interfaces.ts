import {TSetState, TState } from "../../Adventures/Model/types"

  export interface IItemREST{
    getItemList(setState: TSetState): void    
    getItemById(id: string, setState: TSetState): void
    createItem(state: TState, setState: TSetState): void
    updateItem(state: TState, setState: TSetState): void
    removeItemById(id: string, setState: TSetState): void
  }