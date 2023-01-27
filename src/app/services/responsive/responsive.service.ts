import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScreenType } from './responsive-api';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  /**
   * sm: 768px,
   * md: 992px,
   * lg: 1200px
   */
  private smallQuery = '(max-width: 767px)';
  private mediumQuery = '(max-width: 991px) and (min-width: 768px)';
  private largeQuery = '(min-width: 992px)';
  screen$: Observable<ScreenType> = this.breakpointObserver
    .observe([this.smallQuery, this.mediumQuery, this.largeQuery])
    .pipe(
      map((state: BreakpointState) => {
        if (state.breakpoints[this.largeQuery]) {
          return ScreenType.desktop;
        }
        return ScreenType.mobile;
      })
    );
 
 
  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }
}
