var a = parseInt(prompt('Enter fisrt number: '));
var b = parseInt(prompt('Enter second number '));

function inmultire(a,b)
{
  return a * b;
}


var rezultat = inmultire(a,b);
console.log("Rezultatul este inmultirii este:"+rezultat);


function adunare(a,b)
{
  return a + b;
}


var rezultat = adunare (a,b);
console.log ("Rezultatul adunarii:"+rezultat);

function scadere(a,b)
{
    return a - b;
}

var rezultat = scadere(a,b);
console.log("Rezultatul scaderii:" + rezultat);

function impartire (a,b)
{
    return a / b;
}
var rezultat = impartire(a,b);
console.log("Rezultatul impartirii:" + rezultat);

switch(a,b){
    case 1:{
    console.log("Rezultatul inmultirii este");
    break;
    }
    case 2:{
    console.log("Rezultatul adunarii este:"+rezultat);
    }
    case 3:{
        console.log("Rezultatul impartirii este:"+rezultat);
    }
    case 4:{
        console.log("Rezultatul scaderii este:"+rezultat);
    }
}
   
