import { combineReducers, Reducer } from 'redux';



import { characterReducer, BUILDER_INITIAL_STATE, IBuilder } from './builder/reducer';


export interface IAppState {
  builderState: IBuilder;
}

export const INITIAL_STATE: IAppState = {
  builderState: BUILDER_INITIAL_STATE,
};


// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer: Reducer<IAppState> =
  combineReducers({
    builderState: characterReducer
  });
