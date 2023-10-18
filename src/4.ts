class Key {}
class MyHouse extends Key {
  constructor();
  super();
  openDoor();
  comeIn();
}
class Person extends Key {
  constructor();
  super();
  getKey();
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
