//Q1 // Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it

{
  function addNum(num1) {
    return function (num2) {
      return num1 + num2;
    };
  }

  console.log(addNum(7)(5)); // 12
}

//Q2
// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.
{
  arrAnimal = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
  arrLength = arrAnimal.length;

  function searchAnimal(searchArray, searchValue, index = 0) {
    if (searchArray[index] !== searchValue) {
      if (index < searchArray.length) {
        return searchAnimal(searchArray, searchValue, index + 1);
      }
      return false;
    }
    return true;
  }

  console.log(searchAnimal(arrAnimal, 'tiger')); // true
  console.log(searchAnimal(arrAnimal, 'zebra')); // false
}

//Q3
{
  //     3. Write a function that adds a new paragraph element to the bottom of an
  // HTML document. The function should take a string argument that will be
  // used as the text content of the new paragraph element.

  function addParagraph(paraText) {
    const bodyElement = document.getElementById('body');
    const newPara = document.createElement('p');
    newPara.innerText = paraText;
    bodyElement.append(newPara);
  }

  addParagraph('This is new paragrapth');
}
//Q4
{
  //     4. Write a function that adds a new list item to an unordered list in an HTML
  // document. The function should take a string argument that will be used as
  // the text content of the new list item.

  function addListItem(listText) {
    const listElement = document.getElementById('transportList');
    const newItem = document.createElement('li');
    newItem.innerText = listText;
    listElement.appendChild(newItem);
  }
  addListItem('Car');
  addListItem('Bike');
  addListItem('Bus');
}
//Q5
{
  function changeColorInElement(elementId, color) {
    const element = document.getElementById(elementId);
    element.style.backgroundColor = color;
  }
  changeColorInElement('body', 'azure');
  changeColorInElement('transportList', 'aqua');
}
//Q6
{
  // 6. Write a function that saves an object to localStorage. The function should
  // take two arguments: the first argument is a string representing the key to
  // use for storing the object, and the second argument is the object to store.
  let students = [];
  function createOBject(name, rollNo, subject) {
    return {
      name: name,
      rollNo: rollNo,
      subject: subject,
    };
  }

  function saveObject(dataKey, objectArray) {
    localStorage.setItem(dataKey, objectArray);
  }

  students.push(createOBject('ali', 123, 'Css'));
  saveObject('students', JSON.stringify(students));
  students.push(createOBject('raza', 456, 'Js'));
  saveObject('students', JSON.stringify(students));
}
// //Q7
{
  // 7. Write a function that retrieves an object from localStorage. The function
  // should take one argument, which is a string representing the key used to
  // store the object. The function should return the object.

  function getObjectFromLocalStorage(dataKey) {
    return JSON.parse(localStorage.getItem(dataKey));
  }

  console.log(getObjectFromLocalStorage('students'));
}

//Q8
{
  // 8. Write a function that takes an object and saves each property to
  // localStorage using the property name as the key and the property value as
  // the value. The function should also retrieve the object from localStorage
  // and return it as a new object.

  student1 = {
    name: 'ali',
    rollNo: 52,
    subject: 'css',
  };
  function saveObjectLocalStorage(student) {
    Object.keys(student).forEach((key) => {
      localStorage.setItem(key, student[key]);
    });
  }

  function getObjectFromLocalStorage(student) {
    Object.keys(student).forEach((key) => {
      student[key] = localStorage.getItem(key);
    });

    return student;
  }

  saveObjectLocalStorage(student1);
  console.log(getObjectFromLocalStorage(student1));
}
