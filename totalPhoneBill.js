module.exports = function(bill){
  console.log()
  var billing  = bill.split(', ')
var call = [];
 var sms = [];
  for(var i =0; i < billing.length; i++){
  if(billing[i]==='call'){
    call.push(billing[i]);
  }
    else if (billing[i]==='sms'){
    sms.push(billing[i])
    }
  }
var calltotal = call.length * 2.75;
 var smstotal = sms.length * 0.65;
  var overall = calltotal + smstotal;
  return  'R' + overall.toFixed(2);
  }
