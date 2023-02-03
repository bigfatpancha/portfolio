import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

const gutterOptions = {
  none: ['cv-flex-layout--gutter-none'],
  xxsmall: ['cv-flex-layout--gutter-xxsmall'],
  xsmall: ['cv-flex-layout--gutter-xsmall'],
  small: ['cv-flex-layout--gutter-small'],
  base: ['cv-flex-layout--gutter-medium'],
  large: ['cv-flex-layout--gutter-large'],
  xlarge: ['cv-flex-layout--gutter-xlarge'],
  xxlarge: ['cv-flex-layout--gutter-xxlarge'],
};

const alignmentOptions = {
  center: ['cv-flex-layout--alignment-center'],
  start: ['cv-flex-layout--alignment-start'],
  end: ['cv-flex-layout--alignment-end'],
};
const justifyOptions = {
  between: ['cv-flex-layout--justify-space-between'],
  center: ['cv-flex-layout--justify-center'],
  start: ['cv-flex-layout--justify-start'],
  end: ['cv-flex-layout--justify-end'],
};
const types = {
  justify: [
    'cv-flex-layout--alignment-start',
    'cv-flex-layout--justify-space-between',
  ],
  left: ['cv-flex-layout--alignment-center', 'cv-flex-layout--justify-start'],
  center: [
    'cv-flex-layout--alignment-center',
    'cv-flex-layout--justify-center',
  ],
  right: ['cv-flex-layout--alignment-center', 'cv-flex-layout--justify-end'],
};

@Component({
  selector: 'cv-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexLayoutComponent implements AfterViewInit, OnDestroy {
  id: string;
  style: any;
  classes = [];

  @ViewChild('flex') flex!: ElementRef;

  @Input() set type(value: keyof typeof types) {
    this._type = (types[value] || []).join(' ');
  }
  _type!: string;

  /**
   * none
   * xsmall 4px
   * small 8px
   * base 16px
   * large 24px
   */
  @Input() set gutter(value: keyof typeof gutterOptions) {
    this._gutter = (gutterOptions[value] || []).join(' ');
  }
  _gutter = 'cv-flex-layout--gutter-medium';

  @Input() wrap!: boolean;

  @Input() set alignment(value: keyof typeof alignmentOptions) {
    this._alignment = (alignmentOptions[value] || []).join('');
    this.changeDetectorRef.markForCheck();
  }
  _alignment!: string;

  @Input() set distribution(value: keyof typeof justifyOptions) {
    this._distribution = (justifyOptions[value] || []).join('');
    this.changeDetectorRef.markForCheck();
  }
  _distribution!: string;

  @Input()
  set space(space: (string | number)[] | number) {
    this._space = space;
    this.resolveSpace();
  }
  get space(): (string | number)[] | number {
    return this._space;
  }
  private _space!: (string | number)[] | number;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.id =
      'flex_' + new Date().getTime() + Math.floor(Math.random() * 100000);
    this.style = document.createElement('style');
    this.style.appendChild(document.createTextNode(''));
    document.head.appendChild(this.style);
  }

  ngAfterViewInit(): void {
    this.resolveSpace();
  }

  private resolveSpace(): void {
    if (this.space) {
      let space;
      let length;
      if (this.flex) {
        length = this.flex.nativeElement.children.length;
        if (typeof this.space === 'object') {
          space = [];
          if (this.space.length === 1) {
            for (let i = 0; i < length; i++) {
              space.push(this.space[0]);
            }
          } else {
            length = this.space.length;
            space = this.space;
          }
        } else if (typeof this.space === 'number') {
          space = [];
          for (let i = 0; i < length; i++) {
            space.push(this.space);
          }
        }
      } else {
        space = this.space;
        length = typeof this.space === 'object' ? this.space.length : 0;
      }
      this.setFlexStyle(length, space);
    }
  }

  private setFlexStyle(length: number, space: any): void {
    if (this.style.sheet.rules.length > 0) {
      document.head.removeChild(this.style);
      this.style = document.createElement('style');
      this.style.appendChild(document.createTextNode(''));
      document.head.appendChild(this.style);
    }
    for (let i = 0; i < length; i++) {
      this.style.sheet.insertRule(
        '#' +
          this.id +
          '>:nth-child(' +
          (i + 1) +
          ') {flex: ' +
          space[i] +
          ';}',
        i
      );
    }
  }

  ngOnDestroy(): void {
    document.head.removeChild(this.style);
  }
}
