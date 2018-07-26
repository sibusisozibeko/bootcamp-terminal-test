
module.exports =  function (salesData){
 var salesForEachDay = {};
   var num=0;
   var printH="";
for(var i=0;i<salesData.length;i++){
    var listItem = salesData[i];
  if (salesForEachDay[listItem.day] === undefined) {
     salesForEachDay[listItem.day] = 0;
}
  salesForEachDay[listItem.day] +=listItem.sales;


  if(salesForEachDay[listItem.day]>num){

         num = salesForEachDay[listItem.day];
      //console.log(num);
        printH = listItem.day;
         console.log(printH);


     }
}


 return printH;
}
