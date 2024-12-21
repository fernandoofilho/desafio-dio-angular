import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTemplateComponent } from './base-template/base-template.component';
import { HeaderComponent } from '../organisms/header/header.component';
import { OrganismsModule } from '../organisms/organisms.module';


@NgModule({
  declarations: [BaseTemplateComponent],
  imports: [
    CommonModule,
    OrganismsModule
  ],
  exports: [BaseTemplateComponent]
})
export class TemplatesModule { }
