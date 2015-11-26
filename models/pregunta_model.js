function Pregunta(prgt){
  this.prgt = prgt;
  this.view;
}

Pregunta.prototype.get_prgt_type = function(){
  return this.view;
}

Pregunta.prototype.get_prgt = function(){
  return this.prgt;
}

Pregunta.prototype.Kind = function() {
  if(this instanceof PreguntaCorta){
    this.view = "<input type='text' name='respuesta' placeholder='Responda aquí' autofocus=''>";
  }
  else {
    this.view = "<textarea type='text' name='respuesta' rows='5' cols='50' placeholder='Responda aquí' autofocus=''></textarea>";
  }
}

module.exports = Pregunta;
