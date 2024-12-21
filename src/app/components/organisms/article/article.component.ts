import { Component, Input } from '@angular/core';
import { Article } from '../../../core/types';

@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input() article: Article | undefined;
}
