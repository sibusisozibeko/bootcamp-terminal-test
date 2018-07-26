module.exports = function(regNum){
   var paarlregNum =[];

   console.log(regNum)
   var regNum = regNum.split(",");
   for(var i=0;i<regNum.length;i++){
     if (regNum[i].trim().startsWith('CJ') ){
       paarlregNum.push(regNum[i])
 }
   }return paarlregNum.length
 }
