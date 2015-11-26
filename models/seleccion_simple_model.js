var Pregunta = require('./pregunta_model.js');

function SeleccionSimple(prgt, opciones){
  Pregunta.call(this, prgt);
  this.opciones = opciones;
  for (var i=0; i<opciones.length; i++){
  	this.view += "<input type='radio' name='respuesta' value='"+opciones[i]+"'>" +opciones[i]+ "<br>";
  }
}


SeleccionSimple.prototype.get_prgt_type = function(){
  return this.type;
}

SeleccionSimple.prototype.get_prgt = function(){
  return this.prgt;
}

SeleccionSimple.prototype = new Pregunta();
SeleccionSimple.prototype.constructor = SeleccionSimple;

module.exports = SeleccionSimple;
