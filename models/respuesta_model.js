function Respuesta(rpt){
  this.rpt = rpt;
  if(typeof(this.rpt) === 'string' || typeof(this.rpt) === 'number') {
    return function(x){return x === this.rpt;};  
  }
  else if (this.rpt instanceof RegExp) {
    return function(x){return x.match(rpt);};
  }
  else {
    return rpt;
  }
}

module.exports = Respuesta;
