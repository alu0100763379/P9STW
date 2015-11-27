function Respuesta(rpt){
  this.rpt = rpt;
  if(typeof(this.rpt) === 'string' || typeof(this.rpt) === 'number') {
    return function(x){return x === this.rpt;};  
  }
  else if (this.rpt instanceof RegExp) {
    return function(x){return x.match(rpt);};
  }
  
  else if(rpt instanceof Array){
    return function(x){
      if(rpt.length != x.length) return false;

      for(var i=0; i<rpt.length; i++){
        if(rpt[i] != x[i]) 
		return false;
      }

      return true;
    };
  }

  else {
    return rpt;
  }
}

module.exports = Respuesta;
