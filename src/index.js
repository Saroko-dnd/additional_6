module.exports = function zeros(expression) {
  const expressionArray = expression.match(/[0-9]+!+/g);
  const powersOfFive = expressionArray.reduce((powers, nextFactorial) => {return powers + countPowersOfFive(nextFactorial)}, 0);
  const powersOfTwo = powersOfFive ? expressionArray.reduce((powers, nextFactorial) => {return powers + countPowersOfTwo(nextFactorial)}, 0) : 0;

  return (powersOfFive <= powersOfTwo) ? powersOfFive : powersOfTwo;
}

function countPowersOfTwo(factorial){
  const number = parseInt(factorial, 10);
  let result = 0;
  let power = 1;

  if (number > 1){
    if ((factorial.endsWith('!!') && number % 2 === 0) || !factorial.endsWith('!!')){
      do{
        result += Math.floor(number/Math.pow(2, power));
        ++power;
      }while(Math.pow(2, power) <= number);
    }
  }

  return result;
}

function countPowersOfFive(factorial){
  const number = parseInt(factorial, 10);
  let result = 0;
  let power = 1;

  if (factorial.endsWith('!!')){//for !!
    if (number % 2 === 0){//for even !!
      do{
        result += Math.floor(Math.floor(number/Math.pow(5, power))/2);
        ++power;
      }while(Math.pow(5, power) <= number);
    }else if (number >= 5){//for odd !!
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


