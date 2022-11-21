import { Component, OnInit } from '@angular/core';
import { CuidarService } from 'src/app/services/cuidar.service';
import { dados } from '../interface/dados.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public dados:dados[] = [];

  constructor(
     private service: CuidarService
  ) { }

  ngOnInit(): void {
   this.getDados();
   console.log(this.dados.length);
   
  }

  getDados(){
    this.service.getDados().
      subscribe( res => this.dados = res);
  }


  images2 = [
    {
      imageSrc:
        '../../../../assets/imagens/comentario.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        '../../../../assets/imagens/comentario1.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        '../../../../assets/imagens/comentario2.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        '../../../../assets/imagens/comentario3.jpg',
      imageAlt: 'person2',
    },
  ]

  images = [
    {
      imageSrc:
        '../../../../assets/imagens/logos1.png',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        '../../../../assets/imagens/logos2.png',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        '../../../../assets/imagens/logos3.png',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        '../../../../assets/imagens/logos4.png',
      imageAlt: 'person2',
    },
  ]


}
