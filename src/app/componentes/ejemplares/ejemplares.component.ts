import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplares',
  templateUrl: './ejemplares.component.html',
  styleUrls: ['./ejemplares.component.css']
})
export class EjemplaresComponent {

  fila:any;
  izq:any;
  der:any;
  fila2:any;
  izq2:any;
  der2:any;
  fila3:any;
  izq3:any;
  der3:any;
  fila4:any;
  izq4:any;
  der4:any;



  ngOnInit():void{

    /* carrousel de árboles */

    this.fila = document.querySelector("#contenedorCarrousel1");
    this.der = document.querySelector("#der");
    this.izq = document.querySelector("#izq");

    this.der.addEventListener('click', () =>{
      this.fila.scrollLeft += this.fila.offsetWidth;
    })

    this.izq.addEventListener('click', () =>{
      this.fila.scrollLeft -= this.fila.offsetWidth;
    })

    /* carrousel de arbustos */

    this.fila2 = document.querySelector("#contenedorCarrousel2");
    this.der2 = document.querySelector("#der2");
    this.izq2 = document.querySelector("#izq2");

    this.der2.addEventListener('click', () =>{
      this.fila2.scrollLeft += this.fila2.offsetWidth;
    })

    this.izq2.addEventListener('click', () =>{
      this.fila2.scrollLeft -= this.fila2.offsetWidth;
    })

    /* carrousel de enredaderas */

    this.fila3 = document.querySelector("#contenedorCarrousel3");
    this.der3 = document.querySelector("#der3");
    this.izq3 = document.querySelector("#izq3");

    this.der3.addEventListener('click', () =>{
      this.fila3.scrollLeft += this.fila3.offsetWidth;
    })

    this.izq3.addEventListener('click', () =>{
      this.fila3.scrollLeft -= this.fila3.offsetWidth;
    })

    /* carrousel de fauna */

    this.fila4 = document.querySelector("#contenedorCarrousel4");
    this.der4 = document.querySelector("#der4");
    this.izq4 = document.querySelector("#izq4");

    this.der4.addEventListener('click', () =>{
      this.fila4.scrollLeft += this.fila4.offsetWidth;
    })

    this.izq4.addEventListener('click', () =>{
      this.fila4.scrollLeft -= this.fila4.offsetWidth;
    })

  }

}
