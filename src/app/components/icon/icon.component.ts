import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const sizes = {
  xlarge: ['cv-icon--xlarge'],
  base: ['cv-icon--base'],
  small: ['cv-icon--small'],
  xsmall: ['cv-icon--xsmall'],
  xxsmall: ['cv-icon--xxsmall']
};

const colors = {
  yellow: ['cv-icon--yellow'],
  blue: ['cv-icon--blue'],
  pink: ['cv-icon--pink'],
  gray: ['']
}

@Component({
  selector: 'cv-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {

  @Input() icon!: string;

  _size = 'cv-icon--base';
  @Input() set size(value: keyof typeof sizes) {
    this._size = (sizes[value] || []).join(' ');
  }

  _color = '';
  @Input() set color(value: keyof typeof colors) {
    this._color = (colors[value] || []).join(' ');
  }

}
