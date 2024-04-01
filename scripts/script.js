/*
    CAJERO AUTOMÁTICO

    Funciones:
    1- Extracción de dinero
    2- Depositar dinero
    3- Consultar saldo
    4- Consultar información de la cuenta

*/
// La función validar, recibe el usuario y el pin que tiene la base de datos, y valida que el usario y pin ingresado por el usuario coincidan. Con la particularidad que solo tiene 3 intentos.
function validar(usuario, pin) {
  let login = false
  let intentos = 0
  let usuarioIngresado
  let pinIngresado
  do {
    usuarioIngresado = prompt("Ingrese su nombre de usuario: ")
    pinIngresado = Number(prompt("Ingrese su PIN (4 dígitos): "))
    if (usuario === usuarioIngresado && pin === pinIngresado) {
      login = true
    }
    intentos++
  } while (!login && intentos < 3)
  if (3 <= intentos && !login) {
    return false
  } else {
    return true
  }
}
// La función extraer, primero valida que la cantidad de dinero a extraer este disponible en la cuenta. Luego actualiza el saldo de la cuenta.
function extraer(extraccion, saldo) {
  if (saldo <= extraccion) {
    alert("No puede extraer esa cantidad. ¡No posee saldo!")
    return saldo
  } else {
    alert("Extraiga su dinero " + extraccion)
    return saldo - extraccion
  }
}

// La función depositar le indica al usuario que coloque el dinero en el cajero. Y luego, actualiza el saldo de la cuenta.
function depositar(deposito, saldo) {
  alert("Ingrese $" + deposito)
  return saldo + deposito
}
// Funcion principal del programa
function main() {
  //DATOS BD
  let usuario = "PepeGomez"
  let pin = 1111
  let saldo = 25000;
  let CBU = "9270887911100048475210"
  let nombreUsuario = "Pepe"
  let apellidoUsuario = "Gomez"
  if (validar(usuario, pin)) {
    alert("¡Bienvenido " + nombreUsuario + " " + apellidoUsuario + "!")
    let opcion
    do {
      opcion = Number(prompt("Elija una opcion:\n1- Extaer dinero\n2- Depositar dinero\n3- Consultar saldo\n4- Consultar información de la cuenta\n0- Salir"))
      if (opcion === 1) {
        let extraccion = Number(prompt("¿Cuánto desea extraer?"))
        saldo = extraer(extraccion, saldo)
      } else if (opcion === 2) {
        let deposito = Number(prompt("¿Cuánto desea depositar?"))
        saldo = depositar(deposito, saldo)
      } else if (opcion === 3) {
        alert("Su saldo actual es de: $" + saldo)
      } else if (opcion === 4) {
        alert("Información de la cuenta:\nCBU: " + CBU + "\nPopietario: " + nombreUsuario + " " + apellidoUsuario)
      } else if (opcion === 0) {
        alert("Hasta luego " + nombreUsuario)
      } else {
        alert("Opción incorrecta")
      }
    } while (opcion !== 0)
  } else {
    alert("USUARIO BLOQUEADO")
  }
}

main()
