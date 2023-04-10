const username: string = 'jimmy';

const sum =(a:number, b:number) =>{
  return a+b;
}
sum(1,3);

class Person{
  constructor(public age: number, public lastName: string) {}
}
const jimmy = new Person(29,"Giraldo");

jimmy.age;
