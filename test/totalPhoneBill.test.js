"use strict"
let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function(bill){

    it('must return cost of sms', function(){
         assert.equal('R0.65', totalPhoneBill('sms'));


        });

        it('must return cost of call', function(){
          assert.equal('R2.75', totalPhoneBill('call'));
      });

      it('must calculate the total cost of calls and smses', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

});
