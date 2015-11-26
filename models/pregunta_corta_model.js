var Pregunta = require('./pregunta_model.js');

function PreguntaCorta(prgt){
  Pregunta.call(this, prgt);
  this.view = "<input type='text' name='respuesta' placeholder='Responda aquí' autofocus=''>";
}


PreguntaCorta.prototype.get_prgt_type = function(){
  return this.kind;
}

PreguntaCorta.prototype.get_prgt = function(){
  return this.prgt;
}

PreguntaCorta.prototype = new Pregunta();
PreguntaCorta.prototype.constructor = PreguntaCorta;

module.exports = PreguntaCorta;
