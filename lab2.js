//task 1
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

console.log( obj.className );

//task 2
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//task 3
removeClass(obj, 'open');
console.log( obj.className );
removeClass(obj, 'blabla');
console.log( obj.className );

//task 4
const arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log( arr );

//task 5
const arr1 = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];
let num = 5;
console.log(findCouple(arr1, num));

//task 6
const words1 = ['Капуста', 'Капітал'];
const words2 = ['Ракета', 'Ракушка', 'Рак'];

console.log(startingSubstring(words1));
console.log(startingSubstring(words2));

//task 7
let arrForSort = [1, 2, 3, 4, 5];
arrForSort.sort(function () {
    return 0.5 - Math.random();
});
console.log(arrForSort);

//task 8
const john = { name: "John", age: 23 };
const bill = { name: "Bill", age: 18 };
const donald = { name: "Donald", age: 6 };

const people = [ john, bill , donald ];

people.sort(function (a, b) {
    if(a.age > b.age){
        return 1;
    }
    else{
        return -1;
    }
});
console.log(people[0].age);

//task 9
const strings = ["C++", "C#", "C++", "C#",
    "C", "C++", "JavaScript", "C++", "JavaScript"
];

console.log( unique(strings) );

//task 10
const auth = new Author('Joe', 'Dou', 'Writer');
const journal = new Journal(2001, 'Forbes', 27, 10);
const article = new Article('any', 'Random', auth, journal );
console.log(article);
addElement(hTable, auth);
console.log(hTable[0]);
addElement(hTable, journal);
console.log(hTable[1]);
console.log(hTable.counter);