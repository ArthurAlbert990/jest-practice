function capitalize(str){
    let string = str[0].toUpperCase()+str.slice(1)
    return string;
}

function reverseString(str){
    let arr=[];
    for(let x=str.length-1; x>=0; x--){
        arr.push(str[x]);
    }

    return arr.join('');
}

class calculator{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(a,b){return a+b};
    sub(a,b){return a-b};
    divide(a,b){return a/b};
    multiply(a,b){return a*b};
}



//module.exports = capitalize;
//module.exports = reverseString;
module.exports = calculator;


 //07:39 Às 7:52
 //08:13 às 08:40
 //10:25 às 11:10;
 //24/11/2022
 //10:00 às 10:40;

 //OBS: Multiples exports não funcionam
 // como exportar e testar várias funções?

//console.log(reverseString('cap'));

let op = new calculator();
console.log(op.sub(10,2));