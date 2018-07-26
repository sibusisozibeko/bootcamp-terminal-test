"use strict"
let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function(regNum){

    it('check if the registration number is from Paarl and expect two from Paarl CJ ', function(){
         assert.deepEqual(2, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345 '))
});
        it('It must return 0 if theres no registration number from Paarl ', function(){
          assert.deepEqual(0, countAllPaarl('CK 345 123, CK 2345, CL 123-546'));
      });
});
