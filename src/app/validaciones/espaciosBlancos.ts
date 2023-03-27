import {AbstractControl} from "@angular/forms";

export function validarEspaciosBlanco(abstractControl:AbstractControl){
  if(abstractControl == null){
    return null;
  }
  if(abstractControl.value.includes(' ')){
    return { tieneEspacios : true}
  }
  return null;
}
