// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, map, mergeMap } from 'rxjs/operators';


// import { Injectable } from '@angular/core';
// import { actions } from '.';
// import { of } from 'rxjs';

// @Injectable()
// export class DiceEffects {
//   constructor(private actions$: Actions, private data: DataService) {}

//   // fetchPageData$ = createEffect(() =>
//   //   this.actions$.pipe(
//   //     ofType(actions.init),
//   //     mergeMap(() =>
//   //       this.cms.getExplorePageData('ways-to-call').pipe(
//   //         map((res: ExplorePage) => actions.fetchPageDataSuccess({ sections: res.data.content.pages })),
//   //         catchError(() => of(actions.fetchPageDataError()))
//   //       )
//   //     )
//   //   )
//   // );
// }
