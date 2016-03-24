var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var bonus = 0;

function sti (array){
  switch(array[3]){
    case 3:
      bonus = 0.04;
      break;
    case 4:
      bonus = 0.06;
      break;
    case 5:
      bonus = 0.10;
      break;
    }
    if(array[1].length === 4){
      bonus += 0.05;
    }
    if(array[2] > 65000){
      bonus -= 0.01;
    }
    if(bonus > 0.13){
      bonus = 0.13;
    }
    return(bonus);
}
