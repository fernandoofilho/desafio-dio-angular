import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
@Component({
  selector: 'app-button-with-label-icon',
  standalone: false,
  templateUrl: './button-with-label-icon.component.html',
  styleUrl: './button-with-label-icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonWithLabelIconMolecule {
  @Input() text: string | undefined;
  @Input() ariaHidden: string | undefined;
  @Input() arialLabel: string | undefined;
  @Input() icon: string | undefined;
  @Input() hover: boolean = true;
}
