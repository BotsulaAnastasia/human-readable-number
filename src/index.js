module.exports = function toReadable (number) {
  let upToTwenty = (number) => {
    switch (number) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
    }
  }

  let tens = (number) => {
    switch (number) {
        case 20: return 'twenty';
        case 30: return 'thirty';
        case 40: return 'forty';
        case 50: return 'fifty';
        case 60: return 'sixty';
        case 70: return 'seventy';
        case 80: return 'eighty';
        case 90: return 'ninety';
    }
  }

  if (number <= 19) {
    return upToTwenty(number);
  }

  const numberStr = String(number).split('');
  let upToHundred = (number) => {
    return (number % 10 === 0) ? tens(number) : tens(Number(numberStr[numberStr.length - 2] + '0')) + ' ' + upToTwenty(Number(numberStr[numberStr.length - 1]));
  }
  
  if (numberStr.length === 2) {
    return upToHundred(number);
  }

  let fromHundred = (number) => {
    if (number % 100 === 0) {
        return upToTwenty(Number(numberStr[0])) + ' hundred';
    }
    if (numberStr[1] === '0') {
        return upToTwenty(Number(numberStr[0])) + ' hundred ' + upToTwenty(Number(numberStr[2]));
    }
    if (String(number).slice(1) <= 19) {
        return upToTwenty(Number(numberStr[0])) + ' hundred ' + upToTwenty(Number(String(number).slice(1)));
    } else {
        return upToTwenty(Number(numberStr[0])) + ' hundred ' + upToHundred(Number(String(number).slice(1)));
    }  
  }

  if (numberStr.length === 3) {
    return fromHundred(number);
  }
}