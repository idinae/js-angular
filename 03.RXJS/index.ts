import { fromEvent, interval } from "rxjs";
import { map, debounceTime } from "rxjs/operators";

const nameInputEl = document.getElementById("name-input");

const users = [{ name: "Ivan", age: 20 }, { name: "Petar", age: 30 }];
// const users$ = from(users);
// users$.subscribe(console.log);

const clickStream = fromEvent(nameInputEl, "keyup");

const clockDiv = document.getElementById("clock");

//clickStream.subscribe(console.log);

//SEARCH
clickStream
  .pipe(
    debounceTime(100),
    map(e => (e.target as HTMLInputElement).value),
    map(value =>
      users.filter(u => u.name.indexOf(value) !== -1).map(u => u.name)
    )
  )
  .subscribe(console.log);

//CLOCK
interval(1000)
  .pipe(map(() => new Date()))
  .subscribe(date => {
    const h = date.getHours();
    const m = date.getMinutes();
    let s = date.getSeconds().toString();
    if (+s < 10) {
      s = `0${s}`;
    }
    const time = `${h}:${m}:${s}`;
    clockDiv.textContent = time;
  });

// return `${h}:${m}:${s}`;