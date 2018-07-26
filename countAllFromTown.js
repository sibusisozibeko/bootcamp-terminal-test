module.exports = function(regNum, loc){
   var TownregNum =[];
     console.log(regNum)
  var counter = 0;
   var regLoc = regNum.split(",");
   for(var i=0;i<regLoc.length;i++){
     if (regLoc[i].trim().startsWith(loc) ){
  counter+=1;

 }
   }
  return counter;
 }
