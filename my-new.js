const myNew = (constrator,...args) => {    
    let obj = {};
    obj.__proto__ = constrator.prototype;
    let result = constrator.apply(obj,args);
    return result instanceof Object ? result : obj;
}

const myNewByEs6 = (constrator,...args) => {    
    let obj = Object.create(constrator.prototype);
    let result = constrator.call(obj,...args);
    return result instanceof Object ? result : obj;
}

function Person(names,age){
    this.names = names
    this.age = age
}

let p1 = myNew(Person,'kang',20)
let p2 = myNewByEs6(Person,'kang2',200)
console.log(p1.names,p2.names)
