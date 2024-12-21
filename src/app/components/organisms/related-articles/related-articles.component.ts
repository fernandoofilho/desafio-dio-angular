import { Component, Input } from '@angular/core';
import { RelatedArticle } from '../../../core/types';
@Component({
  selector: 'app-related-articles',
  standalone: false,
  templateUrl: './related-articles.component.html',
  styleUrl: './related-articles.component.css',
})
export class RelatedArticlesComponent {
  @Input() relatedArticles: RelatedArticle[] | undefined;
}
