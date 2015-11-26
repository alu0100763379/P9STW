var Pregunta= require('./pregunta_model.js');

function PreguntaLarga(prgt){
  Pregunta.call(this, prgt);
  this.view = "<textarea type='text' name='respuesta' rows='5' cols='50' placeholder='Responda aquí' autofocus=''></textarea>";
}


PreguntaLarga.prototype.get_prgt_type = function(){
  return this.type;
}

PreguntaLarga.prototype.get_prgt = function(){
  return this.prgt;
}


PreguntaLarga.prototype = new Pregunta();
PreguntaLarga.prototype.constructor = PreguntaLarga;


module.exports = PreguntaLarga;
