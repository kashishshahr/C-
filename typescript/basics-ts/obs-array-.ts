const person1: {
       name: string;
       age: number;
       hobbies: string[];
       hobbiesWithAnyDtype: any[];
       role: (string | number)[];
} = {
       name: 'Max',
       age: 30,
       // hobbies:['Sports','Cooking',1]ERROR
       hobbies: ['Sports', 'Cooking'],
       hobbiesWithAnyDtype: ["Sports", 17],
       role: [2, 'author']

}
// const person:{
//        name:string,
//        age:number,
//        hobbies:string[],
//        role:[number,string];//Tuple...in JS  it would be a normal array
// }={
//        name:'Max',
//        age:30,
//        hobbies:['sports','cooking'],
//        //numeric Id and string id
//        role:[2,'author']
// }

enum Role {
       ADMIN='ADMIN', RO=100, AUTHOR='AUTHOR'
       //0    1   2
};
const person = {
       name: 'Max',
       age: 30,
       hobbies: ['sports', 'cooking'],
       role: Role.ADMIN
       // role:4
       //using 4 as role may be tough to remember so ENUM would be useful
       // role:'READONLYUSER'//using this string kind of   
       //but while checking...like eg: if(READ-ONLY-USER)  or ReadOnlyuser..are different
};

// any  -> TS will not say anything if u use any
// person.role.push('admin');
// person.role=[0,'ad'];

//push is Exception
// person.role[1]; 
if (person.role == Role.ADMIN) {
       console.log(person);
}
for (const hobby of person.hobbies) {
       console.log(hobby.toLowerCase());
}