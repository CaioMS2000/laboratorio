// from classes2.ts:

// class CPerson3 {
//     protected name :string

//     constructor(name :string){
//         this.name = name;
//     }

//     get get_name() :string{
//         return this.name;
//     }

//     set set_name(name :string){
//         this.name = name;
//     }
// }

interface Repository<T, ID>{
    findById(id :ID) :T;
    save(entity :T) :T;
}

class PersonRepository implements Repository<CPerson3, number>{
    findById(id :number) :CPerson3{
        console.log(`Searching by id: ${id}`)

        return new CPerson3('RandomGuy');
    }

    save(entity :CPerson3) :CPerson3{
        return entity;
    }
}

const personRepository = new PersonRepository();

let founded = personRepository.findById(2);
let saved = personRepository.save(new CPerson3('Caio'));

console.log(founded)
console.log(saved)

interface Identifier{
    id :number;
}

interface Repository2<T, ID extends Identifier>{
    findById(id :ID) :T;
    save(entity :T) :T;
}

class PersonRepository2 implements Repository2<CPerson3, Identifier>{
    findById(id :Identifier) :CPerson3{
        console.log(`Searching by id: ${id}`)

        return new CPerson3('RandomGuy');
    }

    save(entity :CPerson3) :CPerson3{
        return entity;
    }
}