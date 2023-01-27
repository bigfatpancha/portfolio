import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScreenType } from 'src/app/services/responsive/responsive-api';
import { ResponsiveService } from './../../services/responsive/responsive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  isDesktop!: boolean;

  private subscriptions = new Subscription();

  constructor(
    private responsiveService: ResponsiveService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.responsiveService.screen$
        .pipe(map((screen: ScreenType) => screen === ScreenType.desktop))
        .subscribe((isDesktop: boolean) => {
          this.isDesktop = isDesktop;
          this.changeDetectorRef.markForCheck();
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
