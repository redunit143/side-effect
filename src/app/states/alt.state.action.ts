import { createAction, props } from '@ngrx/store';

export const signalAltState = createAction(
  '[Alt State] Signal Alt State',
  props<{ signalId: string }>()
);
