// Question # 1
{
  console.log('Question 1');
  console.log('---------------');

  let num1 = Number(prompt('Please enter first number.'));
  let num2 = Number(prompt('Please enter second number.'));

  if (num1 > num2) {
    console.log(`First number : ${num1} is greater number`);
  } else if (num2 > num1) {
    console.log(`Second number : ${num2} is greater number`);
  } else {
    console.log('Both numbers are same ');
  }
  console.log(' ');
}

// Question # 2
{
  console.log('');
  console.log('Question 2');
  console.log('---------------');

  let num = Number(prompt('Please enter Postive or Negative number.'));

  if (num >= 0) {
    console.log(`The sign is +`);
  } else {
    console.log('The sign is - ');
  }
}

// Question # 3
{
  console.log('');
  console.log('Question 3');
  console.log('---------------');

  let num1 = Number(prompt('Please enter first number.'));
  let num2 = Number(prompt('Please enter second number.'));
  let num3 = Number(prompt('Please enter third number.'));
  let num4 = Number(prompt('Please enter forth number.'));
  let num5 = Number(prompt('Please enter fifth number.'));

  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    console.log(`First number : ${num1} is greater number from all number`);
  } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    console.log(`Second number : ${num2} is greater number from all number`);
  } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    console.log(`Third number : ${num3} is greater number from all number`);
  } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    console.log(`Forth number : ${num4} is greater number from all number`);
  } else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
    console.log(`Fifth number : ${num4} is greater number from all number`);
  } else {
    console.log(`All numbers are equal`);
  }
}

// Questino # 4
{
  console.log('');
  console.log('Question 4');
  console.log('---------------');

  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is Even`);
    } else {
      console.log(`${i} is Odd`);
    }
  }
}

// Question # 5
{
  console.log('');
  console.log('Question 5');
  console.log('---------------');

  let marks = Number(prompt('Please enter Average marks of a student.'));

  if (marks < 60) {
    console.log(`Student grade is F`);
  } else if (marks < 70) {
    console.log(`Student grade is D`);
  } else if (marks < 80) {
    console.log(`Student grade is C`);
  } else if (marks < 90) {
    console.log(`Student grade is B`);
  } else if (marks <= 100) {
    console.log(`Student grade is A`);
  }
}

// Question # 6
{
  console.log('');
  console.log('Question 6');
  console.log('---------------');

  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Question # 7
{
  console.log('');
  console.log('Question 7');
  console.log('---------------');

  for (let i = 1; i <= 10; i++) {
    let star = ' ';
    for (let j = 1; j <= i; j++) {
      star += '* ';
    }
    console.log(sta);
  }
}
