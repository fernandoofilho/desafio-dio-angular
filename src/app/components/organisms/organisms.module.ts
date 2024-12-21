import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { ArticleComponent } from './article/article.component';
import { RelatedArticlesComponent } from './related-articles/related-articles.component';

@NgModule({
  declarations: [HeaderComponent, ArticleComponent, RelatedArticlesComponent],
  exports: [HeaderComponent, ArticleComponent, RelatedArticlesComponent],
  imports: [CommonModule, MoleculesModule],
})
export class OrganismsModule {}
