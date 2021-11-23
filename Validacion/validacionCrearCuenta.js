export default function validarCrearCuenta(valores){

    let errores = {};

    if(!valores.nombre){
        errores.nombre = "El Nombre es obligatorio";
    }

    if(!valores.email){
        errores.email = "El Email es obligatorio";
    }else if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valores.email)){
        errores.email = "email no valido"
    } 

    if(!valores.password){
        errores.password = "La contraseña es obligatoria";
    } else if(valores.password.length < 6){
        errores.password = "La contraseña tiene que tener al menos 6 caracteres";
    }

    return errores;
}