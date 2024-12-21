import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-small',
  standalone: false,
  templateUrl: './image-small.component.html',
  styleUrl: './image-small.component.css'
})
export class ImageSmallComponent {
  @Input() url: string | undefined;
  @Input() description: string | undefined;
}
