var atticus = {
  name: "Atticus",
  emNum: "2405",
  salary: "47000",
  rating: 3
};

var jem = {
  name: "Jem",
  emNum: "62347",
  salary: "63500",
  rating: 4
};

var boo = {
  name: "Boo",
  emNum: "11435",
  salary: "54000",
  rating: 3
};

var scout = {
  name: "Scout",
  emNum: "6243",
  salary:"74750",
  rating: 5
};

var employees = [atticus, jem, boo, scout];

for(i=0;i<employees.length;i++){
  console.log(totalComp(employees[i]));
}

function sti (object){
  var bonus = 0;
  switch(object["rating"]){
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
    if(object["emNum"].length === 4){
      bonus += 0.05;
    }
    if(object["salary"] > 65000){
      bonus -= 0.01;
    }
    if(bonus > 0.13){
      bonus = 0.13;
    }
    return(bonus);
}


function totalComp(employee){

  return {name: employee["name"],
  bonus: (sti(employee) * 100).toString() + '%' ,
  totalSalary:'$' + (parseInt(employee["salary"]) + (employee["salary"] * sti(employee))).toLocaleString(),
  totalBonus: '$' + (Math.round(employee["salary"] * sti(employee))).toLocaleString() };
}
