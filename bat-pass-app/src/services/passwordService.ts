export default function generatePass(){
    let password:string = ''
    const intervalos = [
    [48, 57],   // números
    [65, 90],   // maiúsculas
    [97, 122],  // minúsculas
    [58, 64],   // símbolos : ; < = > ? @
  ];
    for(let i = 0; i < 8 ; i++ ){
        const intervalo = intervalos[Math.floor(Math.random()*intervalos.length)]
        const codigo = Math.floor(Math.random() * (intervalo[1]- intervalo[0] + 1)) + intervalo[0];
        password+=String.fromCharCode(codigo)
    }
    return password
}