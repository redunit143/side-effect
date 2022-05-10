import { createReducer, on } from '@ngrx/store';

export const initialState: string = "Initial State";

import { signalAltState } from './alt.state.action';

const reducerHandler = function (): string {
  return 'Signaled State';
}
export const altStateReducer = createReducer(
  initialState,
  on(signalAltState, reducerHandler)
);