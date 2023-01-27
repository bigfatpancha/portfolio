import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cv-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RangeComponent {

  @Input() progress!: number;
  @Input() label!: string;

}
