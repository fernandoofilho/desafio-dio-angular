import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OrganismsModule } from '../../components/organisms/organisms.module';
import { TemplatesModule } from '../../components/templates/templates.module';
import { Article, RelatedArticle } from '../../core/types';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, TemplatesModule, OrganismsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomePage {
  mainArticle: Article = {
    title: 'Lorem ipsum dolor sit amet',
    image: {
      url: 'https://img.elo7.com.br/product/zoom/4A29F43/imagem-alta-resolucao-para-quadro-ceu-01-quadro.jpg',
      description: 'Imagem de um céu',
    },
    content: [
      {
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc',
      },
      {
        title: 'Dolor Sit Amet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc',
      },
    ],
  };

  relatedArticles: RelatedArticle[] = [
    {
      title: 'Lorem Ipsum Dolor Sit Amet',

      date: new Date(),
      image: {
        url: 'https://s2-techtudo.glbimg.com/4uvIHOMReah_7syBff5VD9rnkV4=/0x0:1184x896/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/a/k/6T2EyXSNmezAkYcsNh9g/leonardoai.jpg',
        description: 'Poster GTA 6',
      },
      description:
        '      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc',
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      date: new Date(),
      image: {
        url: 'https://s2-techtudo.glbimg.com/4uvIHOMReah_7syBff5VD9rnkV4=/0x0:1184x896/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/a/k/6T2EyXSNmezAkYcsNh9g/leonardoai.jpg',
        description: 'Poster GTA 6',
      },
      description:
        '      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc',
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      date: new Date(),
      image: {
        url: 'https://s2-techtudo.glbimg.com/4uvIHOMReah_7syBff5VD9rnkV4=/0x0:1184x896/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/a/k/6T2EyXSNmezAkYcsNh9g/leonardoai.jpg',
        description: 'Poster GTA 6',
      },
      description:
        '      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc',
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      date: new Date(),
      image: {
        url: 'https://s2-techtudo.glbimg.com/4uvIHOMReah_7syBff5VD9rnkV4=/0x0:1184x896/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/a/k/6T2EyXSNmezAkYcsNh9g/leonardoai.jpg',
        description: 'Poster GTA 6',
      },
      description:
        '      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc',
    },
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      date: new Date(),
      image: {
        url: 'https://s2-techtudo.glbimg.com/4uvIHOMReah_7syBff5VD9rnkV4=/0x0:1184x896/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/a/k/6T2EyXSNmezAkYcsNh9g/leonardoai.jpg',
        description: 'Poster GTA 6',
      },
      description:
        '      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc',
    },
  ];
}
