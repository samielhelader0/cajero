

let nombreR = "samuel";
let contraseñaR = "lola";
let intentos = 0;

let inputNombre = prompt("Ingresa tu usuario");
let inputContraseña = prompt("Ingresa tu contraseña");

if (inputNombre === nombreR && inputContraseña === contraseñaR) {
  alert("Hola " + nombreR + "tu saldo es de 2000$");
} else {
  intentos++;

  inputNombre = prompt("Ingresa tu usuario");
  inputContraseña = prompt("Ingresa tu contraseña");

  if (inputNombre === nombreR && inputContraseña === contraseñaR) {
    alert("Hola " + nombreR + " tu saldo es de 2000$");
  } else {
    intentos++;

    inputNombre = prompt("Ingresa tu usuario");
    inputContraseña = prompt("Ingresa tu contraseña");

    if (inputNombre === nombreR && inputContraseña === contraseñaR) {
      alert("Hola " + nombreR + " tu saldo es de 2000$");
    } else {
      intentos++;

      if (intentos === 3) {
        alert("has bloqueado tu cuenta comunicate al 123");
      } else {
        inputNombre = prompt("Ingresa tu usuario");
        inputContraseña = prompt("Ingresa tu contraseña");

        if (inputNombre === nombreR && inputContraseña === contraseñaR) {
          alert("Hola " + nombreR + " tu saldo es de 2000$");
        } else {
          intentos++;

          if (intentos === 3) {
            alert("has bloqueado tu cuenta comunicate al 123");
          } else {
            inputNombre = prompt("Ingresa tu usuario");
            inputContraseña = prompt("Ingresa tu contraseña");

            if (inputNombre === nombreR && inputContraseña === contraseñaR) {
              alert("Hola " + nombreR + " tu saldo es de 2000$");
            } else {
              intentos++;

              if (intentos === 3) {
                alert("has bloqueado tu cuenta comunicate al 123");
              }
            }
          }
        }
      }
    }
  }
}
