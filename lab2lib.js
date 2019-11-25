const obj = {
    className: 'open menu',
};
function addClass(obj, text){
    const arr = obj.className.split(" ");
    if(arr.indexOf(text) <= 0){
        arr.push(text);
        obj.className = arr.join(" ");
    }
}
function removeClass(obj, text){
    const arr = obj.className.split(" ");
    delete arr[arr.indexOf(text)];
    obj.className = arr.join(" ");
}
function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
    {
        return chr.toUpperCase();
    });
}
function filterRangeInPlace(arr, from, to ) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < from || arr[i] > to) {
            arr.splice(i, 1);
            i--;
        }
    }
}
function findCouple(arr, number) {
    let couples = [];
    let couple = {};
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        couple[str] = true;
    }
    arr = Object.keys(couple);
    let firstNum = null, secondNum = null;
    arr.forEach(function (i, value) {
        if(number - value < number) {
            firstNum = number - value;
            arr.forEach(function (j, value2) {
                if(firstNum === value2 && j > i) {
                    secondNum = value;
                    couples.push("Пара чисел: " + secondNum + " + " + firstNum);
                }
            })
        }
    });
    return couples;
}
function startingSubstring(arr) {
    let result = "";
    let compareString = arr[0];
    let counter = null;
    for(let i = 0; i < arr[0].length; i++){
        for(let j = 0; j < arr.length; j++){
            let str = arr[j];
            if(compareString[i] === str[i]){
                counter++;
            }
        }
        if(counter === arr.length){
            result += compareString[i];
            counter = 0;
        }
        else {
            return result;
        }
    }
    return result;
}
function unique(arr) {
    let result = [];
    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}
function Author(name, lastName, job){
    this.name = name;
    this.lastName = lastName;
    this.job = job;
}
function Journal(year, name, number, page){
    this.year = year;
    this.name = name;
    this.number = number;
    this.page = page;
}
function Article(udk, name, author, journal){
    this.udk = udk;
    this.name = name;
    this.author = author;
    this.journal = journal;
}
const hTable = {
    counter: 0,
};
function addElement(table, obj) {
    let date = new Date();
    table[table.counter] = {
        object: obj,
        creationDate: date,
    };
    table.counter++;
}





