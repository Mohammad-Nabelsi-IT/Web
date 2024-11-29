// let 
// var
// const


// var x = 10 ;
// let n = 10;
// const c =10;

// var x = 15 ;

// n = 20 ;
// x = 20;


// let x = 10;

// {
//     //block scope
//    let   x = 20;
// }

// console.log(x);

const person ={
    firstName :"Mohammad",
    lastName : "Nabelsi",
    dob : "1990-11-10",
    fullName : function(){
      return this.firstName + " " + this.lastName;  
    }
};


console.log(person.fullName());


const rect ={
    width : 100,
    height : 200,
    area : function (){
        return this.width *this.height;
    },
    premiter : function (){
        return this.width *this.height *2;
    }
};

console.log(rect);
console.log(rect.width);
console.log(rect.height);
console.log(rect.area());
console.log(rect.premiter());

const names =["mira" ,"ahmed" ,"sara" ,"dina"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (let name of names) {
 console.log(name);   
}


function Box(width , length , height){
    this.length = length;
    this.height=height;
    this.width=width;
    this.volume = function  (){
        return this.height * this.height * this.width;
    }
}

let b1 = new Box(10,20,30);
console.log(b1);
console.log(b1.volume());


let b2 = new Box(5,10,15);
console.log(b2);
console.log(b2.volume());


for (const key in b1) {
   console.log(key + " " + b1[key]) ;
}


class Employee {
    constructor(name , job ,salary) {
        this.name = name;
        this.job =job;
        this.salary =salary;
    }

    print(){
       console.log("name : " + this.name); 
       console.log("job : " + this.job); 
       console.log("salary : " + this.salary); 
    }
}

let e1 = new Employee("ahmed" ,"instructor" ,7000);
e1.print();

let e2 = new Employee("Dina" ,"sales" ,5000);
e2.print();

let nums =[10,10,20,14 ,20];
let s1 = new Set(nums);

console.log(s1);

console.log("----------------");

let s2 = new Set();
s2.add("Mohammad");
s2.add("Ahmad");
s2.add("Judi");
s2.add("Sara");

console.log(s2);
console.log(s2.has("Sara"));
console.log(s2.size);
console.log("----------------");

let degrees = new Map(
    [
        ["doaa" , 10],
        ["Ali" , 9],
        ["sara" , 5],
        ["ahmed" , 12],
    ]
);

console.log(degrees.get("doaa"));
console.log(degrees.get("dalia"));
degrees.set("mai" , 15);
console.log(degrees.size);
console.log(degrees.delete("ahmed"));
console.log(degrees);

let employees = new Map(
    [
        [128 , {firstName:"Abeer" , lastName:"Hamdan" , salary :5000 , job:"Sales"}],
        [200 , {firstName:"Mona" , lastName:"Samir" , salary :4000 , job :"cs"}]
    ]
);

console.log(employees.get(128));