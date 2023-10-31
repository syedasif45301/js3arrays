//EXERCISE-ARRAY 1
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

console.log(itCompanies.join() + " are big IT companies");

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

let index=3;
let new1="Green Tea";
shoppingCart[index]=new1;
console.log(shoppingCart);


/* In countries array check if 'India' exists in the array
if it exists print 'INDIA'. If it does not exist add to
the countries list.

let countries=['India','Pakistan','USA','UK','China'];
if(countries.includes('India')){
    console.log("INDIA");
}
else{
    console.log(countries.push('Ind'));
}

console.log(countries);

/* Concatenate the following two arrays and store it
in a fullStack variable.
['HTML','CSS','JS','React'] ['Node','Express','MongoDB']

let frnt=['HTML','CSS','JS','React'];
let bknd=['Node','Express','MongoDB'];

let fullStack=console.log(frnt.concat(bknd));*/



//Exercise -Array 3

/*The following is an array of 10 students ages: var
ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two
middle items divided by two)
Find the average age(all items divided by
number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max
- average), use abs() method  

var ages=[19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//sorting array
ages.sort();
console.log(ages);

//min age
console.log("min age:",ages[0]);
//max age
console.log("max age:",ages[9]);

//median age
median_age=console.log("median age:",(ages[4]+ages[5])/2);

//avg age
let avg_age=(19+19+20+22+24+24+24+25+25+26)/10;
console.log("avg age:",avg_age);
console.log("range_of_ages:",age[0]-avg_age);
//console.log(,ages[0]-ages[9]);
*/





