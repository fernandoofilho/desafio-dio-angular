import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'article/:id',
    component: ArticleComponent,
  },
];
