module.exports = function(salesData){
var salesForEachDepartment = {};
  var num=0;
  var printH="";
for(var i=0;i<salesData.length;i++){
   var listItem = salesData[i];
 if (salesForEachDepartment[listItem.department] === undefined) {
    salesForEachDepartment[listItem.department] = 0;
}
 salesForEachDepartment[listItem.department] +=listItem.sales;


 if(salesForEachDepartment[listItem.department]>num){

        num = salesForEachDepartment[listItem.department];
     //console.log(num);
       printH = listItem.department;
         //console.log(printH);

}
}

 return printH;
}
