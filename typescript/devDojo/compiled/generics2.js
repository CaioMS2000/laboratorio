"use strict";
// from classes2.ts:
class PersonRepository {
    findById(id) {
        console.log(`Searching by id: ${id}`);
        return new CPerson3('RandomGuy');
    }
    save(entity) {
        return entity;
    }
}
const personRepository = new PersonRepository();
let founded = personRepository.findById(2);
let saved = personRepository.save(new CPerson3('Caio'));
console.log(founded);
console.log(saved);
class PersonRepository2 {
    findById(id) {
        console.log(`Searching by id: ${id}`);
        return new CPerson3('RandomGuy');
    }
    save(entity) {
        return entity;
    }
}
//# sourceMappingURL=generics2.js.map