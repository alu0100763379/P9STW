var AbstractQuiz = require('./abstract_quiz_model.js');
var Respuesta = require('./respuesta_model.js');
var Corta = require('./pregunta_corta_model.js');
var Larga = require('./pregunta_larga_model.js');
var Simple = require('./seleccion_simple_model.js');
var Multiple = require('./seleccion_multiple_model.js');
var debug = require('debug');

function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    { pregunta: new Simple('¿Capital de Italia?', ['Roma','Moscú','Paris','Madrid']),
      respuesta: new Respuesta(/^\s*roma\s*$/i)
    },
    { pregunta: new Multiple('¿En qué peliculas de la siguiente lista sale Vin Diesel?',['Fast and Furious','Iron Man','Las Crónicas de Riddick','Viaje al Centro de la Tierra']),
      respuesta: new Respuesta(['Fast and Furious','Las Crónicas de Riddick'])
    },
    { pregunta: new Corta('¿Qué animal tiene en su nombre las cinco vocales?'),
      respuesta: new Respuesta(/^\s*murci[eé]lago\s*$/i)
    },
    { pregunta: new Larga('Si: 111 = 13, 112 = 24, 113 = 35, 114 = 46. Entonces 115 = ?'),
      respuesta: new Respuesta(/^\s*57\s*$/i)
    },
    { pregunta: new Simple('¿Cuántos años tiene un lustro?',['10','5','100','50']),
      respuesta: new Respuesta(/^\s*5\s*$/i)
    },
    { pregunta: new Corta('¿Cómo se llama el lugar rodeado de tres cuerdas donde pelean los boxeadores?'),
      respuesta: new Respuesta(/^\s*ring\s*$/i)
    },
    { pregunta: new Simple('¿Qué cantidad de huesos tiene en total el ser humano?',['63','111','206','302']),
      respuesta: new Respuesta(/^\s*206\s*$/i)
    },
    { pregunta: new Multiple('¿Cuáles de los siguientes superheroes no tienen superpoderes?',['Superman','Flash','Green Arrow','Batman']),
      respuesta: new Respuesta(['Green Arrow','Batman'])
    },
    {
      pregunta: new Corta('¿Quién reinaba en España cuando se descubrió América?'),
      respuesta: new Respuesta(function(x) {
        if ((/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)\b/i).exec(x)) {
          return true;
        }
        if ((/\breyes\s+cat[oó]licos\b/i).exec(x)) { return true; }
        return false;
      }),
    }
  );
  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<1;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      debug("n1 = "+n1);
      var n2 = Math.randomInt(9)+1;
      debug("n2 = "+n2);
      self.q.push(
        { pregunta: new Corta('¿ '+n1+'x'+n2+"= ?"),
          respuesta: new Respuesta(function(x) {
            debug("n1 = "+n1);
            debug("n2 = "+n2);
            return (x == n1*n2);
        })
      })
    })();
  }
  debug(this.q);
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

Quiz.prototype.pregunta_num = function() {
  return this.q.length;
}

Quiz.prototype.get_question = function(x){
  return this.q[x]['pregunta'];
}
module.exports = Quiz;
