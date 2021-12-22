interface Person{
    name: string,
    age: number
}
type PersonKey = keyof Person // can be 'name' | 'age' like enum 
//Examle
let personKey: PersonKey = 'name';
personKey = 'age';

type User = {
    _id: number,
    name: string,
    email: string,
    createdAt: Date 
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta = 'name';
// u1 = '_id' //Compile error. Value can be 'name' or 'email' only