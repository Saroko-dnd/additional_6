module.exports = function zeros(expression) {
  const expressionArray = expression.match(/[0-9]+!+/g);
  const oddFactorialsAddZeros = false;

  return expressionArray.reduce((result, nextFactorial) => {return result + getAmountOfZeros(nextFactorial)}, 0);
}

function getAmountOfZeros(factorial){
  const number = parseInt(factorial, 10);
  const double = factorial.endsWith('!!');
  let result = 0;
  let power = 1;

  if (double){//for !!
    if (number % 2 === 0){//for good !!
      do{
        result += Math.floor(Math.floor(number/Math.pow(5, power))/2);
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

/*function searchForFactorOfTwo(factorial){
  const number = parseInt(factorial, 10);
  if (number > 1){

  }

}*/


