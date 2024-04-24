import { createAction, props } from '@ngrx/store';

export const init = createAction('[Dice to Call] Initialise');

// standard
export const fetchPageDataSuccess = createAction('[Dice to Call] Fetch page data success', props<{ sections: any }>());
export const fetchPageDataError = createAction('[Dice to Call] Fetch page data error');

