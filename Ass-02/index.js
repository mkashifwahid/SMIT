//Q1 // Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it

{
    function addNum(num1) {
        return function (num2) {
                return num1+num2;
        }
    }

    console.log(addNum(5)(5));
}

//Q2
// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.
{
    arrAnimal = ['cat', 'dog', 'elephant', 'tiger', 'lion']
    arrLength = arrAnimal.length;

    function searchAnimal(searchValue){
        if (arrLength > 0)

        {

        searchAnimal(arrLength -= 1)
        }
    }
}


{
    function a(num) {
        if (num>1){
            return num * a(num-1 )
        }
        return 1

    }

    console.log(a(5))
}