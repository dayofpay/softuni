function start(pieFlavors,targetOne,targetTwo){
    let pie = [];
    for(let startPieIndex = pieFlavors.indexOf(targetOne); startPieIndex <= pieFlavors.indexOf(targetTwo);startPieIndex++){
        pie.push(pieFlavors[startPieIndex]);
    }
    return pie;
}
console.log(start(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));