import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

const gutterOptions: { [key: string]: string[] } = {
  none: ['cv-block-layout--gutter-none'],
  xxsmall: ['cv-block-layout--gutter-xxsmall'],
  xsmall: ['cv-block-layout--gutter-xsmall'],
  small: ['cv-block-layout--gutter-small'],
  base: ['cv-block-layout--gutter-medium'],
  large: ['cv-block-layout--gutter-large'],
  xlarge: ['cv-block-layout--gutter-xlarge'],
  xxlarge: ['cv-block-layout--gutter-xxlarge'],
  xxxlarge: ['cv-block-layout--gutter-xxxlarge']
};

@Component({
  selector: 'cv-block-layout',
  templateUrl: './block-layout.component.html',
  styleUrls: ['./block-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockLayoutComponent {

  /**
   * none
   * xxsmall 4px
   * xsmall 8px
   * small 16px
   * base 24px
   * large 32px
   * xlarge 40px
   * xxlarge 48px
   * xxxlarge 64px
   */
  @Input() set gutter(value: keyof typeof gutterOptions) {
    this._gutter = (gutterOptions[value] || []).join(' ');
  }
  _gutter = 'cv-block-layout--gutter-medium';

  @Input() set top(value: boolean | '') {
    this._top = value !== false ? 'cv-block-layout--margin-top' : '';
  }
  _top!: string;

  @Input() set bottom(value: boolean | '') {
    this._bottom = value !== false ? 'cv-block-layout--margin-bottom' : '';
  }
  _bottom!: string;

}
