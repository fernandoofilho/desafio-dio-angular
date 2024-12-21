import { Component, Input } from '@angular/core';
import { RelatedArticle } from '../../../core/types';

@Component({
  selector: 'app-article-card',
  standalone: false,
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css',
})
export class ArticleCardComponent {
  @Input() relatedArticle: RelatedArticle | undefined;
  maxLen: number = 75;

  validateCard(): boolean {
    if (this.relatedArticle) {
      for (let attr of Object.keys(this.relatedArticle)) {
        if (
          this.relatedArticle[attr as keyof RelatedArticle] === undefined ||
          this.relatedArticle[attr as keyof RelatedArticle] === null ||
          this.relatedArticle[attr as keyof RelatedArticle] === ''
        ) {
          return false;
        }
      }
      return true;
    }
    return false
  }

  formatDate(date: Date | undefined): string {
    if (!date) return '';
    return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
  }
}
