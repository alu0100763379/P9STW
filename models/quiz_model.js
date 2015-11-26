var AbstractQuiz = require('./abstract_quiz_model.js');
var Respuesta = require('./respuesta_model.js');
var Corta = require('./pregunta_corta_model.js');
var Larga = require('./pregunta_larga_model.js');
var debug = require('debug');

function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    { pregunta: new Corta('¿Capital de Italia?'),
      respuesta: new Respuesta(/^\s*roma\s*$/i)
    },
    { pregunta: new Corta('¿Qué animal tiene en su nombre las cinco vocales?'),
      respuesta: new Respuesta(/^\s*murci[eé]lago\s*$/i)
    },
    { pregunta: new Corta('Si me nombras desaparezco. ¿Qué soy?'),
      respuesta: new Respuesta(/^\s*silencio\s*$/i)
    },
    { pregunta: new Larga('Si: 111 = 13, 112 = 24, 113 = 35, 114 = 46. Entonces 115 = ?'),
      respuesta: new Respuesta(/^\s*57\s*$/i)
    },
    { pregunta: new Larga('No estoy vivo pero crezco. No tengo pulmones pero necesito el aire. No tengo boca pero el agua me mata. ¿Qué soy?'),
      respuesta: new Respuesta(/^\s*fuego\s*$/i)
    },
    { pregunta: new Corta('¿Cuántos años tiene un lustro?'),
      respuesta: new Respuesta(/^\s*5\s*$/i)
    },
    { pregunta: new Larga('¿Cómo se llama el lugar rodeado de tres cuerdas donde pelean los boxeadores?'),
      respuesta: new Respuesta(/^\s*ring\s*$/i)
    },
    { pregunta: new Corta('¿Cuál es el color que representa la esperanza?'),
      respuesta: new Respuesta(/^\s*verde\s*$/i)
    },
    { pregunta: new Corta('¿Qué cantidad de huesos tiene en total el ser humano?'),
      respuesta: new Respuesta(/^\s*206\s*$/i)
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
