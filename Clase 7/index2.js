let numeros = [1,2,3,4,5,6,7,8,9,10];


function tablas(){
    let numeros = [1,2,3,4,5,6,7,8,9,10];
  for(let i=1; i<=numeros.length; i++){
    console.log("La tabla del:",i);
    for(let j=1; j<=numeros.length; j++){
    console.log(`${i} * ${j} =`,i*j) ;
}
 console.log("\n") 
 }  

}


tablas()