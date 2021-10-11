// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Calvin',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

// for (const role of person.role){
//     console.log(role);
// }

if (person.role === Role.ADMIN){
    console.log('is admin');
}