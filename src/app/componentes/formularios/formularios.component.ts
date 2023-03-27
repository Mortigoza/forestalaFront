import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsuarioService} from "../../servicios/usuario.service";
import Swal from "sweetalert2";
import {PlantacionParticular} from "../../modelo/PlantacionParticular";
import {PlantacionParticularService} from "../../servicios/plantacion-particular.service";
import {Router} from "@angular/router";
import {PersonaService} from "../../servicios/persona.service";
import {Persona} from "../../modelo/Persona";

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit{

  estaInscripto: boolean = false;

  constructor(private service : UsuarioService,
              private ppService : PlantacionParticularService,
              private router: Router,
              private personaService : PersonaService) {}


  arboles: boolean = false;
  arbustos: boolean = false;
  enredaderas: boolean = false;


  /* ********* ATRIBUTOS MODAL 2 ********************** */
  modalAbrir2:any;
  modal2: any;
  modalCerrar2: any;


  datosPersona : Persona = {
    nombre: "",
    apellido: "",
    calle: "",
    altura: "",
    localidad: "",
    telContacto: "",
    plantacionParticular: []
  }

  ngOnInit(){
    const valorLocalStorage = localStorage.getItem('persona');
    let idPlantacionPart;
    this.personaService.obtenerDatosPersona(parseInt(valorLocalStorage))
      .subscribe(response => {
        this.datosPersona = response;
        console.log(this.datosPersona);
        console.log(this.datosPersona.plantacionParticular)
        if (this.datosPersona.plantacionParticular != null) {
          this.estaInscripto = true;

        } else {
          this.estaInscripto = false;
        }
      })

  }

  /* ************************** MODAL 2 *********************************** */

  abrirModal2(){
    this.modalCerrar2 = document.querySelector(".modalCerrar2");
    this.modal2 = document.querySelector(".modal2");

    this.modal2.classList.add('modal--show');
  }

  cerrarModal2(){
    this.modalAbrir2 = document.querySelector(".solicitar");
    this.modal2 = document.querySelector(".modal2");

    this.modal2.classList.remove('modal--show');

    let checkboxes : PlantacionParticular = {
      arbol: false,
      arbusto: false,
      enredadera: false
    }
    let plantacionP : PlantacionParticular = {
      arbol: this.arboles,
      arbusto: this.arbustos,
      enredadera: this.enredaderas
    }

    if(JSON.stringify(checkboxes) === JSON.stringify(plantacionP) ){
      Swal.fire({
        position: 'center',
        icon: 'error',
        iconColor: "#CB6074",
        color: "#6016a9",
        title: 'Debe seleccionar al menos un tipo de flora.',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        iconColor: "#CB6074",
        color: "#6016a9",
        title: 'Plantación solicitada!',
        showConfirmButton: false,
        timer: 1500
      });

      this.ppService.solicitarPlantPart(parseInt(localStorage.getItem("persona")),plantacionP)
        .subscribe({
          next:res => {
            this.router.navigate(["/formularios"]);
            window.location.reload();
            localStorage.setItem("idPlantacionesParticulares", res.idPlantacionesParticulares.toString())

          }
        })
    }


}

/* *************** botón solicitar del formulario *************** */

  solicitar() : void{
    this.abrirModal2();

  }
  cerrar() {
    this.modalAbrir2 = document.querySelector(".solicitar");
    this.modal2 = document.querySelector(".modal2");

    this.modal2.classList.remove('modal--show');
    this.router.navigate(["/formularios"]);
  }

}


