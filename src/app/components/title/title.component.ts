import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const sizes = {
  xxlarge: ['cv-title--xxlarge'],
  xlarge: ['cv-title--xlarge'],
  large: ['cv-title--large'],
  medium: ['cv-title--medium'],
  xxmedium: ['cv-title--xxmedium'],
  xmedium: ['cv-title--xmedium'],
  small: ['cv-title--small'],
  xsmall: ['cv-title--xsmall'],
};

const aligns = {
  left: ['cv-title--left'],
  right: ['cv-title--right'],
  center: ['cv-title--center'],
};

const weights = {
  bold: ['cv-title--weight--bold'],
  medium: ['cv-title--weight--medium'],
};

@Component({
  selector: 'cv-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent {
  _size = 'cv-title--medium';
  _align = 'cv-title--left';
  _weight = 'cv-title--weight--bold';

  @Input() set size(value: keyof typeof sizes) {
    this._size = (sizes[value] || []).join(' ');
  }
  @Input() set align(value: keyof typeof aligns) {
    this._align = (aligns[value] || []).join(' ');
  }

  @Input() set weight(value: keyof typeof weights) {
    this._weight = (weights[value] || []).join(' ');
  }

}
