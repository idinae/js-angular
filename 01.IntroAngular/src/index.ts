//IMPORT
import { test } from './other';

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

//PRIVATE and PUBLIC vars
class UserNew {
    constructor(public nameNew: string, public ageNew: number) {
        this.nameNew = nameNew; this.ageNew = ageNew;
    }
}

var ivanNew = new UserNew('Ivan', 20);
console.log(ivanNew.nameNew);

//EXTENDS
class UserSuper extends User {
    constructor(name: string, age: number) {
        super(name, age);
        //
    }
}

//INTERFACE - може да се ползва вместо клас, за по-малки задачи, напр. за прости обекти. ; вместо ,
interface IMyObj {
    name: string;
    age: number;
    data: boolean[];
   //getInfo(text: string): string[]; //какво приема и какво връща
   //getDetails(details: string): void; //не връща нищо
   //getData(): { name: string, age: number }[]; //масив от обекти
}

function doSmt (obj: IMyObj) {
    return 1;
}

//IMPLEMENTS - когато искаме даден клас да имплементира даден интерфейс
class Test implements IMyObj {
    constructor(public name: string, public age: number, public data: boolean[]) {
        //проверява дали е имплементиран правилно интерфейса, нищо повече
    }
}