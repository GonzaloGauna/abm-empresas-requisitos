"use strict";

const baseDatosEmpresas = [];

class User {
  constructor(nombre, contrasenia, nivel = usuarioRegular) {
    this.nombre = nombre;
    this.contrasenia = contrasenia;
    this.nivelUsuario = nivel;
  }

  cambiarContrasenia(nuevaContrasenia) {
    this.contrasenia = nuevaContrasenia;
    return console.log("Contraseña cambiada con exito!");
  }
}
const administrador = { nombreDelUsuario: "Administrador" };
const usuarioRegular = { nombreDelUsuario: "Usuario Regular" };
const fabian = new User("fabito", "123123", administrador);
const gonzalo = new User("gonzalo", "123123", administrador);
const f = new User("gonza", "123123", administrador);

const baseDatoU = [fabian, gonzalo];

/* VALIDADORES */
function validarValor(variable, cantCaracteres) {
  if (variable.length >= cantCaracteres) {
    return variable;
  }
  return alert("Tiene Pocos Caracteres");
}

function buscarEnBd(name, pass) {
  let res = "";
  baseDatoU.forEach((user) => {
    if (user.nombre == name) {
      if (user.contrasenia == pass) {
        res = "LOGEADO";
      } else {
        res = "CONTRASEÑA INCORRECTA";
      }
    } else {
      res = "USUARIO INCORRECTO";
    }
  });
  return res;
}
function pedirDocumentacion() {
  let name = document.getElementById("user").value;
  let pass = document.getElementById("password").value;
  return [name, pass];
}
function logearse() {
  let user = pedirDocumentacion();
  const res = buscarEnBd(user[0], user[1]);
  return alert(res);
}

function registro() {
  let user = pedirDocumentacion();
  baseDatoU.push(new User(user[0], user[1]));

  return alert("Registrado con Exito: " + user[0]);
}
