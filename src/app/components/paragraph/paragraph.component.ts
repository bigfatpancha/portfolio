import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const sizes = {
  xsmall: ['cv-paragraph--xsmall'],
  small: ['cv-paragraph--small'],
  medium: ['cv-paragraph--medium'],
  large: ['cv-paragraph--large'],
  xlarge: ['cv-paragraph--xlarge'],
  xxlarge: ['cv-paragraph--xxlarge'],
};

@Component({
  selector: 'cv-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParagraphComponent {

  @Input() set size(value: keyof typeof sizes) {
    this._size = (sizes[value] || []).join(' ');
  }
  _size = 'cv-paragraph--medium';

}
