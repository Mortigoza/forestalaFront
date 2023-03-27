import {PlantacionParticular} from "./PlantacionParticular";

export class Persona {
  idPersonas?: number;
  nombre:string;
  apellido:string;
  calle:string;
  altura:string;
  localidad:string;
  telContacto:string;
  plantacionParticular?: PlantacionParticular[];

}
