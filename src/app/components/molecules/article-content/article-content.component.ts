import { Component, Input } from '@angular/core';
import { Content } from '../../../core/types';

@Component({
  selector: 'app-article-content',
  standalone: false,
  templateUrl: './article-content.component.html',
  styleUrl: './article-content.component.css'
})
export class ArticleContentComponent {
  @Input() content: Content| undefined;
}
