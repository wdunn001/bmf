import { Injectable } from "@angular/core";
import { dispatch } from "@angular-redux/store";
import { Character } from "../../models/character";
import { Action, Reducer, AnyAction } from "redux";
import { tassign } from "tassign";

export interface IBuilder {
  character: Character;
}

export const BUILDER_INITIAL_STATE: IBuilder = {
  character: new Character()
};

export class BuilderActions {
  static readonly LOAD_CHARACTER = "LOAD_CHARACTER";
}

export const characterReducer: Reducer<IBuilder> = (
  state: IBuilder = BUILDER_INITIAL_STATE,
  action
): IBuilder => {
  switch (action.type) {
    case BuilderActions.LOAD_CHARACTER:
      return tassign(state, { character: action.payload });
  }
  return state;
};
