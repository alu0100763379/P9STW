function Pregunta(prgt){
  this.prgt = prgt;
  this.view;
}

Question.prototype.get_prgt_type = function(){
  return this.view;
}

Question.prototype.get_prgt = function(){
  return this.prgt;
}

module.exports = Pregunta;
