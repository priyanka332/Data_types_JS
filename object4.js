// What is the error of the following code ?


var myObj = { name: "kumar", height: 5.4 };
myObj[name] = 7;
console.log(myObj)


// Output: ReferenceError: name is not defined

// Because the name key we need to give it in strings, otherwise it feels that it is a variable.