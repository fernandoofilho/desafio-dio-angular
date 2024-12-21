import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonWithLabelIconMolecule } from './button-with-label-icon/button-with-label-icon.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MatIconModule } from '@angular/material/icon';
import { ArticleContentComponent } from './article-content/article-content.component';
import { ArticleTitleComponent } from './article-title/article-title.component';
import { ArticleCardComponent } from './article-card/article-card.component';

@NgModule({
  declarations: [
    ButtonWithLabelIconMolecule,
    ArticleContentComponent,
    ArticleTitleComponent,
    ArticleCardComponent
  ],
  exports: [
    ButtonWithLabelIconMolecule,
    ArticleTitleComponent,
    ArticleContentComponent,
    ArticleCardComponent
  ],
  imports: [MatIconModule, CommonModule, AtomsModule],
})
export class MoleculesModule {}
