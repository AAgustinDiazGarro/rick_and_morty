

const validation = (userData) => {
    const error = {}
 
    if(!( /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ .test(userData.email))){
        error.email = 'No es valido el email ingresado';
    }
    if(!userData.email){
        error.email = 'No puede estar vacio este campo';
    }
    if(userData.email.length > 35){
        error.email = 'No puede tener mas de 35 caracteres';
    }
    if(!(/^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/.test(userData.password))){
        error.password = 'Debe tener al menos un numero';
    }
    if(userData.password.length < 7 || userData.password.length > 10){
        error.password = 'Debe tener entre 6 y 10 caracteres';

    }
    return error;


}


export default validation;