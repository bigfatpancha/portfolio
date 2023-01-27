import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cv-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreetingComponent {
  @Input() name!: string;
  @Input() profession!: string;
}
