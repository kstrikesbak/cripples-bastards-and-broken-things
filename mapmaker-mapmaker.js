function doubleAll(numbers) {
  let doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function absoluteValues(numbers) {
  const absolutes = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    absolutes.push(number < 0 ? number * -1 : number);
  }

  return absolutes;
}

function yelledGreetings(greetings) {
  const yelled = [];

  for (let i = 0; i < greetings.length; i++) {
    yelled.push(`${greetings[i]}!`)
  }

  return yelled;
}

function changeToInitials(names) {
  const newArr = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    let newStr = '';

    for (let i = 0; i < name.length; i++) {
      if (i === 0 || name[i - 1] === ' ') {
        newStr = newStr + name[i];
      }
    }

    newArr.push(newStr);
  }

  return newArr;
}

function doubleOdd(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push((numbers[i] % 2 === 1 || numbers[i] % 2 === -1) ? numbers[i] * 2 : numbers[i]
    )
  }
  return doubled;
}

function upperCaseFirstLetters(names) {
  let uppercasedNames = [];

  for (let i = 0; i < names.length; i++) {
    uppercasedNames.push(names[i][0].toUpperCase() + names[i].slice(1).toLowerCase())
  }

  return uppercasedNames;
}

function add1ToLeft(numbers) {
  const with1Addeds = [];
  for (let i = 0; i < numbers.length; i++) {
    const stringifiedNumber = numbers[i].toString();
    const stringWith1Added = stringifiedNumber[0] === '-'
      ? '1' + stringifiedNumber
      : '-1' + stringifiedNumber.slice(1)

    with1Addeds.push(Number(stringWith1Added));
  }

  return with1Addeds;
}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}