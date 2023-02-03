import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const types = {
  solid_light: ['cv-divider--solid-light'],
  solid_dark: ['cv-divider--solid-dark'],
  gradient_light: ['cv-divider--gradient-light'],
  gradient_dark: ['cv-divider--gradient-dark'],
};

const align = {
  center: ['cv-divider--center'],
  left: ['cv-divider--left'],
  right: ['cv-divider--right'],
};

const width = {
  full: ['cv-divider--full'],
  semifull: ['cv-divider--semi-full'],
  medium: ['cv-divider--medium'],
};

@Component({
  selector: 'cv-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DividerComponent {
  _type = 'zt-divider--solid-light';
  @Input() set type(value: keyof typeof types) {
    this._type = (types[value] || []).join(' ');
  }

  _align = 'zt-divider--center';
  @Input() set align(value: keyof typeof align) {
    this._align = (align[value] || []).join(' ');
  }

  _width = 'zt-divider--full';
  @Input() set width(value: keyof typeof width) {
    this._width = (width[value] || []).join(' ');
  }

}
