let calcDisplayVal = document.getElementById("calc-display-val").innerHTML
let calcDisplayElement = document.getElementById("calc-display-val")

let oneBtn = document.getElementById("calc-one")
let twoBtn = document.getElementById("calc-two")
let threeBtn = document.getElementById("calc-three")
let fourBtn = document.getElementById("calc-four")
let fiveBtn = document.getElementById("calc-five")
let sixBtn = document.getElementById("calc-six")
let sevenBtn = document.getElementById("calc-seven")
let eightBtn = document.getElementById("calc-eight")
let nineBtn = document.getElementById("calc-nine")
let zeroBtn = document.getElementById("calc-zero")
let decimalBtn = document.getElementById("calc-decimal")

function pressOne() {
  if (calcDisplayVal.length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '1'
   calcDisplayElement.textContent = calcDisplayVal
  } else {
    calcDisplayVal = calcDisplayVal + '1'
    calcDisplayElement.textContent = calcDisplayVal
  }
}

function pressTwo() {
  if (calcDisplayVal.length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '2'
   calcDisplayElement.textContent = calcDisplayVal
  } else {
    calcDisplayVal = calcDisplayVal + '2'
    calcDisplayElement.textContent = calcDisplayVal
  }
}

function pressThree() {
  if (calcDisplayVal.length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '3'
   calcDisplayElement.textContent = calcDisplayVal
  } else {
    calcDisplayVal = calcDisplayVal + '3'
    calcDisplayElement.textContent = calcDisplayVal
  }
}

function pressFour() {
  if (calcDisplayVal.length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '4'
   calcDisplayElement.textContent = calcDisplayVal
  } else {
    calcDisplayVal = calcDisplayVal + '4'
    calcDisplayElement.textContent = calcDisplayVal
  }
}

function pressFive() {
  if (calcDisplayVal.length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '5'
   calcDisplayElement.textContent = calcDisplayVal
  } else {
    calcDisplayVal = calcDisplayVal + '5'
    calcDisplayElement.textContent = calcDisplayVal
  }
}

function pressSix() {
  if (calcDisplayVal.length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '6'
   calcDisplayElement.textContent = calcDisplayVal
  } else {
    calcDisplayVal = calcDisplayVal + '6'
    calcDisplayElement.textContent = calcDisplayVal
  }
}

function pressSeven() {
  if (calcDisplayVal.length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '7'
   calcDisplayElement.textContent = calcDisplayVal
  } else {
    calcDisplayVal = calcDisplayVal + '7'
    calcDisplayElement.textContent = calcDisplayVal
  }
}

function pressEight() {
  if (calcDisplayVal.length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '8'
   calcDisplayElement.textContent = calcDisplayVal
  } else {
    calcDisplayVal = calcDisplayVal + '8'
    calcDisplayElement.textContent = calcDisplayVal
  }
}

function pressNine() {
  if (calcDisplayVal.length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '9'
   calcDisplayElement.textContent = calcDisplayVal
  } else {
    calcDisplayVal = calcDisplayVal + '9'
    calcDisplayElement.textContent = calcDisplayVal
  }
}

function pressZero() {
  length = calcDisplayVal.length
  if (length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '0'
   calcDisplayElement.textContent = calcDisplayVal
  } else if (calcDisplayVal[length-1] != '/') {
    calcDisplayVal = calcDisplayVal + '0'
    calcDisplayElement.textContent = calcDisplayVal
  }
}

function pressBackspace() {
  if (calcDisplayVal.length == 1) {
    calcDisplayVal = '0'
  } else {
      calcDisplayVal = calcDisplayVal.substring(0, calcDisplayVal.length - 1);
  }
  calcDisplayElement.textContent = calcDisplayVal
}

function pressAC() {
  calcDisplayVal = '0'
  calcDisplayElement.textContent = calcDisplayVal
}

function isOperator(param) {
  if (param == '*') {
    return true
  } else if (param == '/') {
    return true
  } else if (param == '+') {
    return true
  } else if (param == '-') {
    return true
  } else if (param == '=') {
    return true
  } else {
    return false
  }
}

function operatorLocationBackwards() {
  for (let count = calcDisplayVal.length-1; count >= 0; count--) {
    if (isOperator(calcDisplayVal[count]) == true) {
      return calcDisplayVal.length - 1 - count    
    }
  }
  return 0
}

function wasDecimal() {
  
  let loc = operatorLocationBackwards()
  let length = calcDisplayVal.length
  
  if (loc > 0) {
    for (let count = 0; count <= loc; count++) {
      if (calcDisplayVal[length-1-count] == '.') {
        return true
      }
    }
  } else {
    for (let count = 0; count <= length; count++) {
      if (calcDisplayVal[length-1-count] == '.') {
        return true
      }
    }
  }
  return false
}

function pressDecimal() {
 if (wasDecimal() == false && isOperator(calcDisplayVal[calcDisplayVal.length-1]) == false) {
    calcDisplayVal = calcDisplayVal + '.'
    calcDisplayElement.textContent = calcDisplayVal 
  }
}

function pressPlus() {
  if (calcDisplayVal.length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '0'
   calcDisplayElement.textContent = calcDisplayVal
  } else if (isOperator(calcDisplayVal[calcDisplayVal.length-1])) {
  } else {
    calcDisplayVal = calcDisplayVal + '+'
    calcDisplayElement.textContent = calcDisplayVal 
  }
}

function pressMinus() {
  if (calcDisplayVal.length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '0'
   calcDisplayElement.textContent = calcDisplayVal
  } else if (isOperator(calcDisplayVal[calcDisplayVal.length-1])) {
  } else {
    calcDisplayVal = calcDisplayVal + '-'
    calcDisplayElement.textContent = calcDisplayVal 
  }
}

function pressMultiply() {
  if (calcDisplayVal.length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '0'
   calcDisplayElement.textContent = calcDisplayVal
  } else if (isOperator(calcDisplayVal[calcDisplayVal.length-1])) {
  } else {
    calcDisplayVal = calcDisplayVal + '*'
    calcDisplayElement.textContent = calcDisplayVal 
  }
}

function pressDivide() {
  if (calcDisplayVal.length == 1 && calcDisplayVal[0] == '0') {
   calcDisplayVal = '0'
   calcDisplayElement.textContent = calcDisplayVal
  } else if (isOperator(calcDisplayVal[calcDisplayVal.length-1])) {
  } else {
    calcDisplayVal = calcDisplayVal + '/'
    calcDisplayElement.textContent = calcDisplayVal 
  }
}

function pressEquals() {
  result = eval(calcDisplayVal)
  calcDisplayElement.textContent = result
}