//EXERCISE-ARRAY 1

const { ReplaceSource } = require("webpack-sources");

/*
//Declare an empty array

let arr=[];
console.log(typeof(arr));

//Declare an array with more than 5 number of elements

let arr1=['rohit','kohli','siraj','rahul','bumrah','shubman','iyer'];
console.log(arr1);

//Find the length of your array
console.log(arr1.length);

/*Get the first item, the middle item and the last
item of the array

console.log("first item:",arr1[0]);
console.log("middle item:",arr1[3]);
console.log("last item:",arr1[6]);

/*Declare an array called mixedDataTypes, put
different data types in the array and find the
length of the array. The array size should be
greater than 5

let mixedDataTypes=["king","prince",'A',7,18,"india","hyd"];
console.log("length of mixedDataTypes:",mixedDataTypes.length);


/*Declare an array variable name itCompanies and
assign initial values Facebook, Google, Microsoft,
Apple, IBM, Oracle and Amazon 

let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];

//Print the array using console.log()

console.log(itCompanies);

//Print the number of companies in the array

console.log(itCompanies.length);

//Print the first company, middle and last company

console.log("first company:",itCompanies[0]);
console.log("middle company:",itCompanies[3]);
console.log("last company:",itCompanies[6]);

/* Print out each company Change each company
name to uppercase one by one and print them out

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

/*Print the array like as a sentence: Facebook,
Google, Microsoft, Apple, IBM,Oracle and Amazon
are big IT companies. Using join() method

console.log(itCompanies.join());

/*Check if a certain company exists in the
itCompanies array. If it exist return the company
else return a company is not found

if(itCompanies.includes('Appl'))
{
    console.log("exist:",itCompanies);
}
else{
    console.log("company does not found");
}
*/



//EXERCISE-ARRAY 2

var shoppingCart=['Milk','Coffee','Tea','Honey'];
console.log(shoppingCart);

//adding "Meat" at first place and printing length of array
console.log(shoppingCart.unshift('Meat'));

// printing new array with meat 
console.log(shoppingCart);

//adding sugar at last place 
console.log(shoppingCart.push('Sugar'));

//printing new array with sugar
console.log(shoppingCart);

//removing honey using splice
console.log(shoppingCart.splice(4,1));

//printing new array after removing honey
console.log(shoppingCart);

//modifying tea to 'Green tee'
/*
if(shoppingCart[3]=='Tea')
{
    console.log(shoppingCart[3].replace("Green Tea"));
}

console.log(shoppingCart);
*/

/* In countries array check if 'India' exists in the array
if it exists print 'INDIA'. If it does not exist add to
the countries list.*/

let countries=['India','Pakistan','USA','UK','China'];
if(countries.includes('India')){
    console.log("INDIA");
}
else{
    console.log(countries.push('Ind'));
}

console.log(countries);

let frnt=['HTML','CSS','JS','React'];
let bknd=['Node','Express','MongoDB'];

let fullStack=frnd+bknd;
console.log(fullStack);



