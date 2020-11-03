//var 1
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name; this.age = age;
    }
}

var ivan = new User('Ivan', 20);
console.log(ivan.name);


//private and public vars
class UserNew {

    constructor(public nameNew: string, public ageNew: number) {
        this.nameNew = nameNew; this.ageNew = ageNew;
    }
}

var ivanNew = new UserNew('Ivan', 20);
console.log(ivanNew.nameNew);
