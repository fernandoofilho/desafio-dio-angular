import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonAtom } from './button/button.component';
import { ImageSmallComponent } from './image-small/image-small.component';

@NgModule({
  declarations: [ButtonAtom, ImageSmallComponent],
  exports: [ButtonAtom, ImageSmallComponent],
  imports: [CommonModule],
})
export class AtomsModule {}
