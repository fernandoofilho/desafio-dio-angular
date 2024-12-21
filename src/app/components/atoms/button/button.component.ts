import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-button-atom',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonAtom {
  @Input() text: string | undefined;
  @Input() hover: boolean = true;
  @Input() onClick: ((e: Event) => {}) | undefined;
}
