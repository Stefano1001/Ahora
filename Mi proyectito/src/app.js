// scripts.js - ejemplo para probar el linter

const saludo = "Hola mundo" // falta punto y coma (debe detectarse y arreglarse)
let unusedVar = 42; // variable no usada -> debe marcarse error

function decirSaludo() {
  const mensaje = 'Bienvenido a la prueba' // comillas simples vs reglas de comillas
  console.log(mensaje)
}

decirSaludo()
