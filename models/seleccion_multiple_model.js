var Pregunta = require('./pregunta_model.js');

function SeleccionMultiple(prgt, opciones){
  Pregunta.call(this, prgt);
  this.opciones = opciones;
  for(var i = 0; i<opciones.length;i++){
        this.view += "<input type='checkbox' name='respuesta' value='"+opciones[i]+"'>"+opciones[i]+"<br>";
      }
}


SeleccionMultiple.prototype.get_prgt_type = function(){
  return this.type;
}

SeleccionMultiple.prototype.get_prgt = function(){
  return this.prgt;
}

SeleccionMultiple.prototype = new Pregunta();
SeleccionMultiple.prototype.constructor = SeleccionMultiple;

module.exports = SeleccionMultiple;
