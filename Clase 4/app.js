// let perfil = "ADMINISTRADOR";


// switch(perfil){
// case 'administrador' || 'Administrador' || 'ADMINISTRADOR':
//     console.log('Usted tiene todos los privilegios de uso del sistema')
//     break;
// case 'asistente' || 'Asistente' || 'ASISTENTE':
//     console.log('Usted solo tiene permisos de registrar, modificar y consultar datos')    
//     break;
// case 'invitado'||'INVITADO'||'Invitado':
//     console.log('Usted solo tiene permisos de consultar datos')
//     break;
// case "":
//     console.log('Debe especificar el perfil del usuario')
//     break;

// default:
//     console.log('Debe especificar un perfil valido');
// }



const perfil = ''; 

const resultado =
  perfil === 'administrador' || perfil === 'Administrador' || perfil === 'ADMINISTRADOR'
    ? 'Usted tiene todos los privilegios de uso del sistema'
    : perfil === 'asistente' || perfil === 'Asistente' || perfil === 'ASISTENTE'
    ? 'Usted solo tiene permisos de registrar, modificar y consultar datos'
    : perfil === 'invitado' || perfil === 'Invitado' || perfil === 'INVITADO'
    ? 'Usted solo tiene permisos de consultar datos'
    : perfil === ''
    ? 'Debe especificar el perfil del usuario'
    : 'Debe especificar un perfil válido';

console.log(resultado);