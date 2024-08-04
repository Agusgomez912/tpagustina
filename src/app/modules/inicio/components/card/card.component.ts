import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { Jugadores } from 'src/app/models/jugadores';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   // PROPIEDAD PÚBLICA (TIPO: ARRAY)
   public info: Jugadores[];
  
   constructor(){
     this.info = [
       {
         id: "",
         nombre: " Majo Granatto",
         edad: 5,
         imagen: "https://d2az8otjr0j19j.cloudfront.net/templates/001/979/534/twig/static/img/majo-granatto24.jpg",
         alt: "Chanchito"
       },
       {
         id: "",
         nombre: "Gonzalo Peillat",
         edad: 6,
         imagen: "https://d2az8otjr0j19j.cloudfront.net/templates/001/979/534/twig/static/img/gonzalo-peillat24.jpg",
         alt: "Border Collie"
       },
       {
         id: "",
         nombre: "Celina Di Santo",
         edad: 2,
         imagen: "https://d2az8otjr0j19j.cloudfront.net/templates/001/979/534/twig/static/img/celina-disanto24.jpg",
         alt: "Gatito"
       }
     ]
   }
}
