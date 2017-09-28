module.exports = function zeros(expression) {
  const expressionArray = expression.match(/[0-9]+!+/g);
  const oddFactorialCanHaveZeros = !!expressionArray.find(searchForFactorOfTwo);

  return expressionArray.reduce((result, nextFactorial) => {return result + getAmountOfZeros(nextFactorial, oddFactorialCanHaveZeros)}, 0);
}

function getAmountOfZeros(factorial, oddFactorialCanHaveZeros){
  const number = parseInt(factorial, 10);
  const double = factorial.endsWith('!!');
  let result = 0;
  let power = 1;

  if (double){//for !!
    if (number % 2 === 0){//for even !!
      do{
        result += Math.floor(Math.floor(number/Math.pow(5, power))/2);
        ++power;
      }while(Math.pow(5, power) <= number);
    }else if (oddFactorialCanHaveZeros && number >= 5){//for odd !!
      do{
        result += Math.ceil(Math.floor(number/Math.pow(5, power))/2);
        ++power;
      }while(Math.pow(5, power) <= number);
    }
  }else{ //for !
    do{
      result += Math.floor(number/Math.pow(5, power));
      ++power;
    }while(Math.pow(5, power) <= number);
  }

  return result;
}

function searchForFactorOfTwo(factorial){
  const number = parseInt(factorial, 10);

  if (number > 1){
    if(!factorial.endsWith('!!')){
      return true;
    }else if (number % 2 === 0) {
      return true;
    }  
  }

  return false;
}


