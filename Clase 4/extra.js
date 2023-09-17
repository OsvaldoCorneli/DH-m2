const velocidad = 270;
const altura = 160;

if(velocidad >= 268 && velocidad <=278){
    if(altura >= 150 && altura<=300){
        console.log("El avion esta listo para aterrizar");
    }
    else if(altura < 150){
        if(velocidad < 268){
        console.log("El avion vuela demasiado bajo y demasiado lento")
    }else if(velocidad > 278){console.log("El avion vuela demasiado bajo y demasiado rapido");}
    else{console.log("El avion vuela demasiado bajo")}
    }else{console.log("el avion vuela demasiado alto")}
}else if(velocidad < 268){
    if(altura < 120){console.log("cuidado el avion vuela demasiado lento y demasiado bajo")}
    else if(altura > 300){console.log("cuidado el avion vuela demasiado lento y demasiado alto")}
    else{console.log("Cuidado: El avion va demasiado lento, podria entrar en perdida")}
}else{
    if(altura < 150){console.log("el avion va demasiado rapido y demasiado lento para el aterrizaje")}
    else if(altura > 300){console.log("El avion va demasiado rapido y demasiado alto para el aterrizaje")}
    else{console.log("El avion va demasiado rapido para el aterrizaje")}}
